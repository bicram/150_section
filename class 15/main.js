(function ($) {
	"use strict";

    jQuery(document).ready(function($){

      // masonry active
      $(".product-list").masonry();


      // owl-carousel
      $(".homepage-slides").owlCarousel({
      	items:1,
      	loop:true,
      	autoplay:false,
      	dots:false,
      	nav:true,
      	navText:[ "<i class='fas fa-arrow-left'></i>",  "<i class='fas fa-arrow-right'></i>"]


      }); 

      $(".product-promotion").owlCarousel({
      	items:1,
      	loop:true,
      	autoplay:false,
      	dots:true,
      	nav:false

      });


      $(".menu-trigger").on("click", function(){
      	$(".offcanvas-menu, .offcanvas-overlay").addClass("active");
      	return false;
      });

    // manuclose perpose
       $(".menu-close, .offcanvas-overlay").on("click", function(){
      	$(".offcanvas-menu, .offcanvas-overlay").removeClass("active");
      });
    



// please dont delete under this bruckets.........i want to sleep
    });
    jQuery(window).load(function(){

        
    });


}(jQuery));	