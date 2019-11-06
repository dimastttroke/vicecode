<?php

if (
  empty($_POST['tel']) || //  Есть телефон
  empty($_SERVER['HTTP_X_REQUESTED_WITH']) ||
  strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest'  // пришло AJAX-ом
) {
    header('HTTP/1.0 403 Forbidden');
    echo 'You are forbidden!';
    die();
}

$phone = $_POST['tel'];
$names = $_POST['name'];
$packet = $_POST['attrakc'];
$phone = htmlspecialchars($phone);
$names = htmlspecialchars($names);
$packet = htmlspecialchars($packet);
$phone = urldecode($phone);
$names = urldecode($names);
$packet = urldecode($packet);
$phone = trim($phone);
$names = trim($names);
$packet = trim($packet);
$token = "719056428:AAEm4RFSoQcd9ypnMMPxvBMnTS0crZ5ffxc";
$chat_id="-300896919";

function getUserIP() {
    // Get real visitor IP behind CloudFlare network
    if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
        $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
        $_SERVER['HTTP_CLIENT_IP'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
    }

    $client = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote = $_SERVER['REMOTE_ADDR'];

    if (filter_var($client, FILTER_VALIDATE_IP)) {
        $ip = $client;
    } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
        $ip = $forward;
    } else {
        $ip = $remote;
    }

    return $ip;
}

/*
// формируем URL в переменной $queryUrl
$queryUrl = 'https://vicecode.bitrix24.ru/rest/9/gwd4qgfthzgt5h51/crm.lead.add.json';
// формируем параметры для создания лида в переменной $queryData
$queryData = http_build_query(array(
    'fields' => array(
    'TITLE' => "$names | vicecode.ru",
    "NAME" => "$names",
    "COMMENTS" => "Заявка с сайта vicecode.ru",
    'PHONE' => Array(
        "n0" => Array(
            "VALUE" => "$phone",
            "VALUE_TYPE" => "MOBILE",
        ),
    ),
    'SOURCE_ID' => 'WEB',
    ),
    'params' => array("REGISTER_SONET_EVENT" => "Y")
));
// обращаемся к Битрикс24 при помощи функции curl_exec
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_SSL_VERIFYPEER => 0,
    CURLOPT_POST => 1,
    CURLOPT_HEADER => 0,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $queryUrl,
    CURLOPT_POSTFIELDS => $queryData,
));
$result = curl_exec($curl);
curl_close($curl);
$result = json_decode($result, 1);
if (array_key_exists('error', $result)) echo "Ошибка при сохранении лида: ".$result['error_description']."<br/>";

*/

$arr = array(
    'Имя: ' => $names,
    'Телефон: ' => $phone,
    'Выйграл ли подарок: ' => $packet
);

$txt = urlencode("Имя: ".$names."\nТелефон: ".$phone."\n IP: ".getUserIP());
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>