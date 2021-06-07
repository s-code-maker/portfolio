$(function() {
  $('.error').hide();                                                          /*скрываем тэги с классом .error*/
  $('input.text-input,textarea.text-input').css({backgroundColor:"#FFFFFF"});  /*цвет поля не в фокусе*/
  $('input.text-input,textarea.text-input').focus(function(){
    $(this).css({backgroundColor:"rgba(255, 128, 96,0.25)"});                  /*Цвет фона поля ввода в фокусе*/                               
  });
  $('input.text-input,textarea.text-input').blur(function(){
    $(this).css({backgroundColor:"#FFFFFF"});                                  /*Цвет уже заполненного поля*/
  });

  $(".button").click(function() {                /*Функция отслеживающая нажатие кнопки*/     
		// validate and process form
		// first hide any error messages
    $('.error').hide();                          /*скрываем тэги с классом error когда жмем кнопку отправить*/
		
	  var name = $("input#name").val();            /*поле ввода и id этого поля*/
		if (name == "") {                            /*if - если,name == "" ,т.е условие если поле пустое*/
      $("label#name_error").show();              /*тогда показать ошибка*/
      $("input#name").focus();                   /*и фокус на этом поле*/
      return false;                              /*не отправлять пока поля не будут заполнены*/
    }
		var email = $("input#email").val();          /*В ПЕРЕМЕННУЮ EMAIL ЗАПИСЫВАЕТСЯ ЗНАЧЕНИЕ,КОТОРОЕ ВВЕЛИ В ПОЛЕ EMAIL*/
		if (email == "") {
      $("label#email_error").show();
      $("input#email").focus();
      return false;
    }
    
    var theme = $("input#theme").val();    /*В ПЕРЕМЕННУЮ THEME ЗАПИСЫВАЕТСЯ ЗНАЧЕНИЕ,КОТОРОЕ ВВЕЛИ В ПОЛЕ THEME*/
    if (theme == "") {
      $("label#theme_error").show();
      $("input#theme").focus();
      return false;
    }

		var text = $("textarea#text").val();   /*В ПЕРЕМЕННУЮ TEXT ЗАПИСЫВАЕТСЯ ЗНАЧЕНИЕ,КОТОРОЕ ВВЕЛИ В ПОЛЕ TEXTAREA*/
		if (text == "") {
      $("label#text_error").show();
      $("textarea#text").focus();
      return false;
    }
		
    /*Записываем строку переменных(внутри которых значения),которую хотим передать скрипту ajax*/

		var dataString = 'name='+ name + '&email=' + email + 'theme=' + theme + '&text=' + text;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "bin/mail_small.php",                   /*php скрипт,который обрабатывает передаваемые нами данные*/
      data: dataString,                            /*Функция обрабатывает значения из нащей строки dataString с вызовом php скрипта*/
      success: function() {
        $('#contact_form').html("<div id='message'></div>");          /*id нашей формы,меняем содержимое блока с формой после отправки на новое содержимое с информацией об успешной отправки,*/
        $('#message').html("<h2>Сообщение успешно отправлено!</h2>")   /*При успешной отправке выйдет сообщение*/
        // .append("<p>Спасибо!</p>")
        .hide()
        .fadeIn(1500, function() {                                            /*Время,через которое выйдет картинка*/
          $('#message').append("<img id='checkmark' src='img/check.png' />"); /*При успешной отправке выйдет картинка*/
        });
      }
     });
    return false;                       /*Если страница не обновляется*/
	});
});
runOnLoad(function(){
  $("input#name").select().focus();
});
