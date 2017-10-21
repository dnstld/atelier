<?php
  $nome = $_POST['name'];
  $email = $_POST['email'];
  $tel = $_POST['phone'];

  $para = "contato@denistoledo.com.br";
  $assunto = "Cadastro promoções - Dia da Mulher";
  $msg = "
    <b>Nome:</b> $nome<br />
    <b>E-mail:</b> $email<br />
    <b>Telefone:</b> $tel<br />
  ";

  $header = "From: $email \r\n";
  $header .= "Content-Type: text/html; charset=utf-8 \r\n";

  mail($para,$assunto,$msg,$header);
?>
