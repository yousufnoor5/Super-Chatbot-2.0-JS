<?php

// To scrap age of any celebrity 

include "simple_html_dom.php";

$query = $_POST['question'];
// $query = "babar azam  age";

if(isset($_POST['question'])){
$url = "https://www.google.com/search?q=". $query;

if(preg_match_all("/[\s]/", $url)||preg_match_all("/[.]/", $url)){
    $goodUrl = preg_replace("/[\s]/", '+', $url);
}

$html = file_get_html($goodUrl);

$age = $html->find('div[class="BNeawe iBp4i AP7Wnd"]',0);

$name = $html->find('span[class="BNeawe tAd8D AP7Wnd"]',0);


if(isset($age)&&isset($name)){

$symbol = "/[\W]/";
$filterAge = preg_replace($symbol, ' ', $age->plaintext);

$response = $name->plaintext ." Age is ". $filterAge;

echo $response;

}else{
    echo "I tried finding at Google but did not find anything related to your question.";
}
}
else{
    header('location: ../');
exit;
}
