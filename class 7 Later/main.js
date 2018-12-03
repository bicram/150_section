(function ($) {
	"use strict";

    jQuery(document).ready(function($){

  
      // owl carousel javascript
      $(".staff-list").owlCarousel({
       loop:true,
      	items:3,
        margin:30,
        // navtrue must for navtext
        nav:true,
      	autoplay:false,   
        navText:[" age<i class='fas fa-arrow-left'></i>",  "<i class='fas fa-arrow-right'></i>"]
      })   
        


//        $(".staff-list").owlCarousel({
//     items: 3,
//     margin:30,
//     loop:true,
//     autoplay: true,
//     nav: true,
//     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
// });


      //   $('.owl-carousel').owlCarousel({
      //   loop:true,
      //   margin:10,
      //   autoplay:true,
      //   nav:true,
      //   responsive:{
      //       0:{
      //           items:1
      //       },
      //       600:{
      //           items:3
      //       },
      //       1000:{
      //           items:5
      //       }
      //   }
      // })


// this brackets is the ending of begginning javascript.......so dont please delete it
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	