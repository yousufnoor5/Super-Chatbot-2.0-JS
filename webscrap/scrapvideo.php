<?php

// To scrap youtube video 

include "simple_html_dom.php";

$query = $_POST['question'] . " dailymotion";
// $query = "play aloo mia aloo mia kaha gai thay" . "dailymotion";



if(isset($_POST['question'])){

    //Removing 'I want to' text from search query
    if(preg_match_all("/i want to/", $query)){
        $query2 = preg_replace("/i want to/", '', $query);
    }else{
        $query2 = $query;
    }


$url = "https://www.google.com/search?q=".$query2."&tbm=vid";

if(preg_match_all("/[\s]/", $url)||preg_match_all("/[.]/", $url)){
    $goodUrl = preg_replace("/[\s]/", '+', $url);
}else{
    $goodUrl = $url;
}

$html = file_get_html($goodUrl);

// echo $html;



$data;
$videoDiv = $html->find('div[class="kCrYT"]', 0);

// if div class kCrYT contains a tag

if($videoDiv->find('a')){
    $data = $videoDiv->find('a',0)->href;
    //Finding if url is dailymotion
    if(preg_match("/dailymotion.com/", $data)){
    //replace all after &
    $dmlink = preg_replace("/\&.*$/", "", $data);
    // replace all before /
    $dmnew = preg_replace("/^[^v]*\//", "", $dmlink);
    //replace all after v and add embed + $dmlink
    $dmlink2 = preg_replace("/v.*$/", "embed/".$dmnew, $dmlink);
    //replace before all "="
    echo preg_replace("/^[^W]*=/","",$dmlink2);
    }else{
        echo "";
    }
}else{
    echo "";
}
}else{
    header('location: ../');
exit;
}



?>



