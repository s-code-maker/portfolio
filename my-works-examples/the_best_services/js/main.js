$(document).ready(function(){

  $('.header__slide').slick();

});

$(document).ready(function(){

  $('.feedback__content_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [

    			{
    			 breakpoint:1000,
    			 settings:
    			 		  {slidesToShow: 2,
    					   slidesToScroll: 2}	
    			},

    			{
    			 breakpoint:576,
    			 settings:
    			 		  {slidesToShow: 1,
    					   slidesToScroll: 1}	
    			}

   				]

	});

});

            // Меню бургер

$('#menu').click(function() {
    $('#menu-show').toggleClass('visible');
});

