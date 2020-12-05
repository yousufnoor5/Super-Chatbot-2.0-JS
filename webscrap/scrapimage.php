<?php

// To scrap age of any celebrity 

include "simple_html_dom.php";

$query = $_POST['question'];
// $query = "Arijit singh";

if(isset($_POST['question'])){

//Looking if how look or image is in the url.

if (preg_match_all("/(images?)|(how)|(looks? ?(like)?)(show m?e?)|(images? of)|(photos?)|(pictures?)/i", $query)) {
    $query2 = preg_replace("/(images?)|(how)|(looks? ?(like)?)|(show m?e?)|(images? of)|(photos?)|(pictures?)/i", "", $query);
}else{
    $query2 = $query;
}
// echo $query2;

$url = "https://www.bing.com/images/search?q=".$query2."&first=1&scenario=ImageBasicHover";

if (preg_match_all("/[\s]/", $url) || preg_match_all("/[.]/", $url)) {
    $goodUrl = preg_replace("/[\s]/", '+', $url);
} else {
    $goodUrl = $url;
}

$context = stream_context_create(array('http' => array('header' => 'User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.60 Safari/537.17')));

$html = file_get_html($goodUrl, false, $context);
// echo $html;
$num = 0;

// echo $html->find('div[class="kCrYT"]',0);

if ($html->find('div[class="img_cont hoff"]')) {
    while ($num <= 1) {

        $imgDiv = $html->find('div[class="img_cont hoff"]', $num);
        $link = $imgDiv->find('img',0);
        echo '<img class="img" src="' . $link->src . '">';
        // echo $link . "<br>";
        ++$num;
    }
} else {
    echo "";
    exit;
}
}else{
        header('location: ../');
    exit;
    }
    

// elseif ($html->find('div[class="BNeawe s3v9rd AP7Wnd"]')){
//     $data = $html->find('div[class="BNeawe s3v9rd AP7Wnd"]',0);
//     echo $data;
// }else{
//     echo "I tried finding at Google but did not find anything related to your question.";
// }
// 



// foreach($html->find('div[class="BNeawe s3v9rd AP7Wnd"]') as $element){

//     if(isset($element)){

//      echo $element;

//     }else{
//         echo "I tried finding at Google but did not find anything related to your question.";
//     }
//     ++$num;
//     if($num >= 3){
//     break;
//     }
// }
// }
