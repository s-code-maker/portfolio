<?php
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);

$name = urldecode($name);
$email = urldecode($email);
$text = urldecode($text);

$name = trim($name);
$email = trim($email);
$text = trim($text);
//echo $name;
//echo "<br>";
//echo $email;
//echo "<br>";
//echo $text;

if (mail("vak64@yandex.ru", "Заявка с сайта",
 "Имя: ".$name. 
 ". E-mail: ".$email.
 ". Текст: ".$text ,
 "From: mail@vak64.darkhost.pro \r\n"))


 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>