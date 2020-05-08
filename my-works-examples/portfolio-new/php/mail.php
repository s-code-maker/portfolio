
<meta charset="utf-8"> 
<?php
$theme="Сообщение с сайта Portfolio";
error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы		
if (isset($_POST['name']))			{$name			= $_POST['name'];		if ($name == '')	{unset($name);}}
if (isset($_POST['email']))	    	{$email		    = $_POST['email'];		if ($email == '')	{unset($email);}}
if (isset($_POST['text']))			{$text			= $_POST['text'];		if ($text == '')	{unset($text);}}
if (isset($_POST['sub']))			{$sub			= $_POST['sub'];		if ($sub == '')		{unset($sub);}}
//стирание треугольных скобок из полей формы
if (isset($name) ) {
$name=stripslashes($name);
$name=htmlspecialchars($name);
}
if (isset($email) ) {
$email=stripslashes($email);
$email=htmlspecialchars($email);
}
if (isset($text) ) {
$text=stripslashes($text);
$text=htmlspecialchars($text);
}
// адрес почты куда придет письмо
$address="vak64@yandex.ru";
// текст письма 
$note_text="Тема : $theme \r\nИмя : $name \r\n Email : $email \r\n Дополнительная информация : $text";

if (isset($name)  &&  isset ($sub) ) {
mail($address,$theme,$note_text,"Content-type:text/plain; windows-1251"); //Функция,которая отправляет на почту
// сообщение после отправки формы
echo "<p style='color:#009900;'>Уважаемый(ая) <b>$name</b> Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам скоро ответят на почту <b> $email</b>.</p>";
}

?>