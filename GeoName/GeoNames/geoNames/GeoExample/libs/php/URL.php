<?php
	$cl = curl_init();
    curl_setopt($cl, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($cl, CURLOPT_URL,'http://api.geonames.org/getJSON?formatted=true&geonameId='.$_REQUEST['ID'].'&username=flightltd&style=full');
	$result=curl_exec($cl);
	curl_close($cl);
		
	header('Content-Type: application/json; charset=UTF-8');
	echo $result;
?>
