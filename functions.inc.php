<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    include("travel-data.inc.php");
	$rr = '<div class="row">';
	$rr .= '<div class="col-md-4">';
	$rr .= '<a href="post.php?id='.${'postId'.$number}.'" class=""><img src="images/'.${'thumb'.$number}.'" alt="'.${'title'.$number}.'"class="img-responsive"/></a></div>';
	$rr .= '<div class="col-md-8">';
	$rr .= '<h2>'.${'title'.$number}.'</h2>';
	$rr .= '<div class="details">Posted by ';
	$rr .= generateLink('user.php?id='.${'userId'.$number}.'', ''.${'userName'.$number}.'', "");
	$rr .= '<span class="pull-right">'.${'date'.$number}.'</span>';
	$rr .= '<p class="ratings">';
	$rr .= constructRating(${'reviewsRating'.$number});
	$rr .= ' '.${'reviewsNum'.$number}.' REVIEWS</p></div>';
	$rr .= '<p class="excerpt">'.${'excerpt'.$number}.'</p>';
	$rr .= '<p><a href="post.php?id='.${'postId'.$number}.'" class="btn btn-primary btn-sm">Read more</a></p></div></div><hr/>';
	echo $rr;
}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";
    
    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
    }
    
    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }    
    
    return $imgTags;    
}

?>