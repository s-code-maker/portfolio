<?php
$name = $_POST['name'];          /*Принемаем переменную из javascript файла*/
$email = $_POST['email'];        /*Принемаем переменную из javascript файла*/
$theme = $_POST['theme'];        /*Принемаем переменную из javascript файла*/
$text = $_POST['text'];          /*Принемаем переменную из javascript файла*/

                       /*Проверяем поля еще раз перед отправкой на сервер*/

$name = htmlspecialchars($name);       /*Проверяем на специальные символы*/
$email = htmlspecialchars($email);
$theme = htmlspecialchars($theme);
$text = htmlspecialchars($text);

$name = urldecode($name);             /*Проверяем*/
$email = urldecode($email);
$theme = urldecode($theme);
$text = urldecode($text);

$name = trim($name);        /*Проверяем на пустое поле*/
$email = trim($email);
$theme = trim($theme);
$text = trim($text);
//echo $name;
//echo "<br>";
//echo $email;
//echo "<br>";
//echo $text;

if (mail("vak64@yandex.ru", "Заявка с сайта",        /*mail - функция отправки данных на сервер*/
 "Имя: ".$name. 
 ". E-mail: ".$email.
 ". Тема:   ".$theme.
 ". Текст:  ".$text ,
 "From: mail@vak64.darkhost.pro \r\n"))


 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>