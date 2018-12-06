(function ($) {
	"use strict";

    jQuery(document).ready(function($){

      
      $('.project-titles li').on('click',function(){

       // class add and remove for gooddesign practice
      	$('.project-titles li').removeClass('active');
    	$(this).addClass('active');

       // data sorting perpose
      	var selector = $(this).attr('data-filter');
      	$(".projects-list").isotope({
      		filter: selector
      	});
      });

    });

  
    // actve isotope plugins first here
    jQuery(window).load(function(){

        jQuery(".projects-list").isotope();
    });


}(jQuery));	