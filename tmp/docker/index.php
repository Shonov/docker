<?php

$connect = new mysqli('mysql', 'root', 'test', 'test');

if ($connect->connect_error) die('Ошибка подключения ('. $connect->connect_errno . ')' . $connect->connect_error);

$result = $connect->query("SELECT * FROM pet");

var_dump($result);
