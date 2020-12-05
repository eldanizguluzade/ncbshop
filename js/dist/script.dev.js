"use strict";

$(function () {
  navcategory = $("#navcategory");
  $("#navcategorybtn").click(function () {
    if (!navcategory.hasClass("d-block")) {
      navcategory.addClass("d-block").animate({
        left: '0px'
      }, 100);
    }
  });
  $("nav ul li .close").click(function () {
    navcategory.animate({
      left: "-240px"
    }, 100);
    setTimeout(function () {
      if (navcategory.hasClass("d-block")) {
        navcategory.removeClass("d-block");
      }
    }, 2000);
  }); //Modal Responsiv and Web Open For Products

  $('#product').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var proimgurl, procontent, protitle;

    if ($(document).width() > 768) {
      proimgurl = button.parents().eq(1).children("a").children("img").attr("src");
      procontent = button.parents().eq(1).children("a").children(".sell-item-content");
      protitle = procontent.children(".sell-item-title").children("span").text();
    } else if ($(document).width() <= 768) {
      proimgurl = button.children("img").attr("src");
      procontent = button.children(".sell-item-content");
      protitle = procontent.children(".sell-item-title").children("span").text();
    }

    $("#imgproduct").attr("src", proimgurl);
    $("#protitle").text(protitle); // Use above variables to manipulate the DOM 
  });
});