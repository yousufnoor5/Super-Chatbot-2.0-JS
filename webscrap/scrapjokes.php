<?php

// To scrap jokes

include "simple_html_dom.php";

// $query = $_POST['question'];
$jokesTopic = ['latest-jokes','animal-jokes', 'clean-jokes', 'school-jokes', 'insult-jokes', 'relationship-jokes', 'food-jokes'];
// echo $jokesTopic[mt_rand(0,9)];
$query = $jokesTopic[mt_rand(0,6)];

if(isset($_POST['question'])){


$url = "http://www.laughfactory.com/jokes/". $query;

$html = file_get_html($url);


// echo $html;



if ($html->find('div[class="joke-text"]')) {


        $jokesText = $html->find('div[class="joke-text"]', mt_rand(0,11));
        $link = $jokesText->find('p',0);
        echo $link->plaintext;
        echo "<br>";
        
} else {
    echo "";
    exit;
}
}else{
    header('location: ../');
exit;
}
    
