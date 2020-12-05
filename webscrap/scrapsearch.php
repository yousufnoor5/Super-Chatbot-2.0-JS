<?php

// To scrap age of any celebrity 

include "simple_html_dom.php";

$query = $_POST['question'];
// $query = "weather of karachi";

if(isset($_POST['question'])){
$url = "https://www.google.com/search?q=" . $query;

if (preg_match_all("/[\s]/", $url) || preg_match_all("/[.]/", $url)) {
    $goodUrl = preg_replace("/[\s]/", '+', $url);
} else {
    $goodUrl = $url;
}

$html = file_get_html($goodUrl);
$data = "";


if ($html->find('div[class="BNeawe iBp4i AP7Wnd"]')) {
    $data = $html->find('div[class="BNeawe iBp4i AP7Wnd"]', 0);

    //Removing this non sense unicode replacement character �
    if (preg_match_all("/[[:^print:]]/", $data)) {
        $newData = preg_replace("/[[:^print:]]/", "", $data);
    } else {
        $newData = $data;
    }
    echo $newData;

} elseif ($html->find('div[class="BNeawe s3v9rd AP7Wnd"]')) {
    $data = $html->find('div[class="BNeawe s3v9rd AP7Wnd"]', 0);

    //Removing this non sense unicode replacement character �
    if (preg_match_all("/[[:^print:]]/", $data)) {
        $newData = preg_replace("/[[:^print:]]/", "", $data);
    } else {
        $newData = $data;
    }
    echo $newData;

} else {
    echo "I tried finding at Google but did not find anything related to your question.";
}
}else{
    header('location: ../');
exit;
}


?>