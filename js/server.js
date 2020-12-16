 fetch('https://eldanizguluzade.github.io/ncbshop/json/products.json')
    .then(response => {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        }
        return Promise.reject(new Error(response.statusText));
    })
    .then(response => response.json())
    .then(data => {
       creatHtml(data.fashion,"#fashion").then(function(r){
         creatHtml(data.electronics,"#electronics");})
         .then(function(r){
           creatHtml(data.sports,"#sports");})
           .catch(function(err){
             console.log(err);
      });
      
      
    })
    .catch(error => {
        console.log(error);
        return null;
    });


function creatHtml(prd,path){
    var html="",num=0;
    prd.forEach(product=>{
    html+=`
    <li class="${addclass(++num)}"><a href="#" data-toggle="modal" data-target="#product">
    <img src="${product.img}"
        alt="not found photo">
    <div class="sell-item-content">
        <div class="sell-item-title">
            <span>${product.title}</span>
        </div>
        <div class="sell-item-price">
            <div class="new-price"><span class="nprice">$${product.newprice}</span></div>
            <div class="old-price d-none"><del
                    class="text-muted oprice">${product.oldprice}</del></div>
        </div>
    </div>
</a>
<div class="more-items d-none d-md-block">
     <button class="btn item-modal" data-toggle="modal" data-target="#product"><i class="fas fa-search"></i></button>
    <ul class="bottom-items row">
        <li><button class="btn add-card-item">Add to cart</button></li>
        <li><button class="btn add-wish"><span
                    class="fas fa-heart"></span></button></li>
        <li><button class="btn add-exchange"><span
                    class="fas fa-exchange-alt"></span></button></li>
    </ul>
</div>
</li>
           `
    });
    document.querySelector(path).innerHTML=html;
    return Promise.resolve("Created");
}

let addclass=(n)=>{
    console.log(n);
     if(n<=4){
         return "d-block";
     }
    else if(n >= 4 && n <= 6){
        return "d-block d-md-none d-lg-block";
     }else if(n>=6){
        return "d-block d-md-none d-xl-block";
     }
}