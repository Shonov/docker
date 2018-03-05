<?php
/**
 * Created by PhpStorm.
 * User: vitaly
 * Date: 27.02.18
 * Time: 11:48
 */
error_reporting(E_ALL);

$to      = 'v@webant.ru';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: v-shonov@mail.ru' . "\r\n" .
    'To: web@example.com' . "\r\n";

$result = mail($to, $subject, $message);
var_dump($result);
try {
    mail($to, $subject, $message, $headers);
} catch (Exception $e) {
    throw new Exception('Error 400');
}

