(function ($) {
    "use strict";

    jQuery(document).ready(function($){

     $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').on("click", function(){
        $('html, body').animate({scrollTop : 0},"slow");
        return false;
    });
      







// this brackets is the ending of begginning javascript.......so dont please delete it
    });


    jQuery(window).load(function(){

        
    });


}(jQuery)); 