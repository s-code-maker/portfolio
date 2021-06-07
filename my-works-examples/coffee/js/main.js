                                                       // плавный скролл 

$(window).load(function () {

  	$('a').on('click', function (e) {
          e.preventDefault();
  		var anchor = $(this).attr('href').split('#');

  		$('html, body').animate({
  			scrollTop: $('#' + anchor[1]).position().top + 'px'
  		}, 1000);

  	});


  });

                                                      // подключение слайдера

 // $('.slider1').mobilyslider();


                                                             // menu

$(document).ready(function() {
	
  $(".header__nav_menu-min").click(function() {                  //отлавиваем клик мышкой по иконке меню
    $(".menu-show").addClass("show");               			//добавляем класс show к классу .header__menu
  });

$(".menu-show").on("mouseleave", function(){        //фиксируем, что курсор мышки убирается с блока с классом .header__menu
    $(".menu-show").removeClass("show");            //убираем класс show у блока с классом .header__menu
});


});
