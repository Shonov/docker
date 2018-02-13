<?php
/**
 * Created by PhpStorm.
 * User: vitaly
 * Date: 13.02.18
 * Time: 15:23
 */

$connect = new mysqli('mysql', 'root', 'test', 'test');

if ($connect->connect_error) die('Ошибка подключения ('. $connect->connect_errno . ')' . $connect->connect_error);

