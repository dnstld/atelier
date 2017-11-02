<?php
  $type = $_POST['type'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $tel = $_POST['phone'];
  $born = $_POST['born'];
  $subject = "Promoção - " . $type . ' - ' . $name;

  $to = "rogersmuk@gmail.com";
  $subjectTitle = $subject;
  $msg = "
    <b>Nome:</b> $name<br />
    <b>E-mail:</b> $email<br />
    <b>Telefone:</b> $tel<br />
    <b>Data de nascimento:</b> $born<br />
  ";

  $header = "From: $email \r\n";
  $header .= "Content-Type: text/html; charset=utf-8 \r\n";

  mail($to,$subjectTitle,$msg,$header);
?>
