<?php

// include "simple_html_dom.php";

$query = $_POST['question'];
// $query = "internet";

if(isset($_POST['question'])){

    //query space remover
if(preg_match_all("/[\s]/", $query)||preg_match_all("/[.]/", $query)){
        $newQuery = preg_replace("/[\s]/", '+', $query);
  }else{
        $newQuery = $query;
 }

// $html = file_get_html('https://news.google.com/news?cf=all&hl=en&pz=1&ned=pk&q=' . $newQuery . '&output=rss');

$num = 0;


// $list = $html->find('div[class="cb-col-100 cb-col cb-schdl"]',0);
// echo $list;


// echo $html;


$rssfeed = simplexml_load_file('https://news.google.com/news?cf=all&hl=en&pz=1&ned=pk&q=' . $newQuery . '&output=rss');
// print_r($rssfeed);
// echo $rssfeed;
foreach ($rssfeed->channel as $channel) {
    foreach ($channel->item as $item) {
        if(isset($item)){
        echo '<div class="news">';
        echo "<strong>". htmlentities($item->title) . "</strong><br>";
        echo '<a target="_blank" style="text-decoration:none" href="'. htmlentities($item->link). '">Read More</a><br>';
        echo htmlentities($item->pubDate);
        echo "<br><br>";
        echo '</div>';
        // echo htmlentities($item->title);
        // echo htmlentities($item->description);
        // echo htmlentities($item->img);


        // this is to get only top 3 results
        ++$num;
        if ($num >= 5) {
            break;
        }
    
    }else{
        echo "";
    }
    
}
}
}else{
        header('location: ../');
    exit;
    }

?>