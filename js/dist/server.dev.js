"use strict";

fetch('/json/products.json').then(function (response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }

  return Promise.reject(new Error(response.statusText));
}).then(function (response) {
  return response.json();
}).then(function (data) {
  creatHtml(data.fashion, "#fashion").then(function (r) {
    creatHtml(data.electronics, "#electronics");
  }).then(function (r) {
    creatHtml(data.sports, "#sports");
  })["catch"](function (err) {
    console.log(err);
  });
})["catch"](function (error) {
  console.log(error);
  return null;
});

function creatHtml(prd, path) {
  var html = "",
      num = 0;
  prd.forEach(function (product) {
    html += "\n    <li class=\"".concat(addclass(++num), "\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#product\">\n    <img src=\"").concat(product.img, "\"\n        alt=\"not found photo\">\n    <div class=\"sell-item-content\">\n        <div class=\"sell-item-title\">\n            <span>").concat(product.title, "</span>\n        </div>\n        <div class=\"sell-item-price\">\n            <div class=\"new-price\"><span class=\"nprice\">$").concat(product.newprice, "</span></div>\n            <div class=\"old-price d-none\"><del\n                    class=\"text-muted oprice\">").concat(product.oldprice, "</del></div>\n        </div>\n    </div>\n</a>\n<div class=\"more-items d-none d-md-block\">\n     <button class=\"btn item-modal\" data-toggle=\"modal\" data-target=\"#product\"><i class=\"fas fa-search\"></i></button>\n    <ul class=\"bottom-items row\">\n        <li><button class=\"btn add-card-item\">Add to cart</button></li>\n        <li><button class=\"btn add-wish\"><span\n                    class=\"fas fa-heart\"></span></button></li>\n        <li><button class=\"btn add-exchange\"><span\n                    class=\"fas fa-exchange-alt\"></span></button></li>\n    </ul>\n</div>\n</li>\n           ");
  });
  document.querySelector(path).innerHTML = html;
  return Promise.resolve("Created");
}

var addclass = function addclass(n) {
  console.log(n);

  if (n <= 4) {
    return "d-block";
  } else if (n >= 4 && n <= 6) {
    return "d-block d-md-none d-lg-block";
  } else if (n >= 6) {
    return "d-block d-md-none d-xl-block";
  }
};