$(function() {
  $('.error').hide();
  $('input.text-input,textarea.text-input').css({backgroundColor:"#FFFFFF"});
  $('input.text-input,textarea.text-input').focus(function(){
    $(this).css({backgroundColor:"#FFDDAA"});
  });
  $('input.text-input,textarea.text-input').blur(function(){
    $(this).css({backgroundColor:"#FFFFFF"});
  });

  $(".button").click(function() {
		// validate and process form
		// first hide any error messages
    $('.error').hide();
		
	  var name = $("input#name").val();
		if (name == "") {
      $("label#name_error").show();
      $("input#name").focus();
      return false;
    }
		var email = $("input#email").val();
		if (email == "") {
      $("label#email_error").show();
      $("input#email").focus();
      return false;
    }
		var text = $("textarea#text").val();
		if (text == "") {
      $("label#text_error").show();
      $("textarea#text").focus();
      return false;
    }
		
		var dataString = 'name='+ name + '&email=' + email + '&text=' + text;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "bin/mail_small.php",
      data: dataString,
      success: function() {
        $('#contact_form').html("<div id='message'></div>");
        $('#message').html("<h2>Сообщение успешно отправлено!</h2>")
        .append("<p>Спасибо!</p>")
        .hide()
        .fadeIn(1500, function() {
          $('#message').append("<img id='checkmark' src='img/check.png' />");
        });
      }
     });
    return false;
	});
});
runOnLoad(function(){
  $("input#name").select().focus();
});
