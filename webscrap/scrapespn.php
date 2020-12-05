<?php

// scrap cricket score

include "simple_html_dom.php";

if(isset($_POST['question'])){
$html = file_get_html('https://www.espncricinfo.com/scores');
$num = 0;
// echo $html;

foreach($html->find('div[class="match-highlight border-bottom"]') as $element) {

     
       //this is to know if any live matches is available or not
       if(isset($element)){
       
      echo '<div class="cricketscore">';

    if($element->find('span[class="label match-status"]',0)){
         echo "Recent: ";
    }
       if($element->find('span[class="label match-status red"]',0)){
           echo "<span style=color:red>";
           echo $element->find('span[class="label match-status red"]',0) . ": ";
           echo "</span>";
       }
       echo $element->find('p[class="small mb-0 match-description"]',0)->plaintext . "<br>";
       echo $element->find('div[class="competitor-details competitor-details-name align-items-center"]',0)->plaintext . ": ";
       echo $element->find('span[class="score"]',0) . '<br>';
       echo $team2 = $element->find('div[class="competitor-details competitor-details-name align-items-center"]',1)->plaintext . ": ";
       echo $element->find('span[class="score"]',1) . '<br>';
       echo $element->find('p[class="extra-small mb-0 match-description match-description-bottom"]',0);
       echo '</div>';

       }else{
           echo "";
       }

       //this is to get only top 3 results
       ++$num;
       if($num >= 3){
       break;
       }
}
}else{
    header('location: ../');
exit;
}
