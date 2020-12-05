$(function(){

    //Effects Navbar and more
    //Start
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
    //End


//  //Copy Number For Click and more.
//     //Start
//     $(".modal .modal-footer span.phone > span").click(function(){
//         var copyText = $(this).text();
//         console.log(copyText);
//         copyText.focus();
//         copyText.setSelectionRange(0, 99999)
//         document.execCommand("copy");
//     })
//    //End


    //Modal Responsiv and Web Open For Products
    //Start
    $('#product').on('show.bs.modal', event => {
        var button = $(event.relatedTarget);
        let proimgurl,procontent,protitle;

        if($(document).width() > 768){
            proimgurl=button.parents().eq(1).children("a").children("img").attr("src");
            procontent=button.parents().eq(1).children("a").children(".sell-item-content");
            protitle=procontent.children(".sell-item-title").children("span").text();
        }
        else if($(document).width() <= 768){
             proimgurl=button.children("img").attr("src");
             procontent=button.children(".sell-item-content");   
             protitle=procontent.children(".sell-item-title").children("span").text();
        }

        $("#imgproduct").attr("src",proimgurl);
        $("#protitle").text(protitle);
        // Use above variables to manipulate the DOM 
    });
    //End



  //AngleUp Start
    $(window).scroll(function(){
        let scrollTop=$(window).scrollTop();

        if(scrollTop > 170){
            $("#angleup").fadeIn(200);
        }
        else{
            $("#angleup").fadeOut(200);
        }
    });
   $("#angleup").on("click",function(){
     $("html,body").animate({
            scrollTop:"0",
     },"slow");

   });
  //End

});