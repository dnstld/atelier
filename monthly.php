<?php
  $nome = $_POST['name'];
  $email = $_POST['email'];
  $tel = $_POST['phone'];
  $born = $_POST['born'];

  $para = "rogersmuk@gmail.com";
  $assunto = "Cadastro promoções - Sorteio mensal";
  $msg = "
    <b>Nome:</b> $nome<br />
    <b>E-mail:</b> $email<br />
    <b>Telefone:</b> $tel<br />
    <b>Data de nascimento:</b> $born<br />
  ";

  $header = "From: $email \r\n";
  $header .= "Content-Type: text/html; charset=utf-8 \r\n";

  mail($para,$assunto,$msg,$header);
?>
