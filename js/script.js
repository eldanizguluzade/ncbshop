$(function(){
    navcategory = $("#navcategory");
    $("#navcategorybtn").click(function(){
        if(!navcategory.hasClass("d-block")){
            navcategory.addClass("d-block").animate({
                left:'0px',
            },100);
        }
        });
       

    $("nav ul li .close").click(function(){
        navcategory.animate({
            left:"-240px"
        },100);

        setTimeout(() => {
            if(navcategory.hasClass("d-block")){
                navcategory.removeClass("d-block");
            }
        }, 2000);

    });
});