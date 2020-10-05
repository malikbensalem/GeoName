$('#btnPlace').click(function() {
	$.when(
	$.ajax({
		url: "libs/php/countryInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#selCountry').val(),
		},
		success: function(result) {
			if (!(jQuery.isEmptyObject(result))){
				$('#pID').html(result['geonames'][0]['geonameId']);
				$('#pNorth').html(result['geonames'][0]['north']);
				$('#pSouth').html(result['geonames'][0]['south']);
				$('#pEast').html(result['geonames'][0]['east']);
				$('#pWest').html(result['geonames'][0]['west']);
				$('#pCError').html("");
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			$('#pCError').html(jqXHR+" "+textStatus+" "+errorThrown);
		}
	})).done(function (){
	$.ajax({
		url: "libs/php/URL.php",
		type: 'POST',
		dataType: 'json',
		waitFor:300,
		data: {
			ID: $('#pID').html(),
		},
		success: function(result) {
			if (!(jQuery.isEmptyObject(result))){
				$('#pURL').html(result["wikipediaURL"]);
				$('#pUCError').html("");
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			$('#pUCError').html(jqXHR+" "+textStatus+" "+errorThrown);
		}
	}),
	$.ajax({
		url: "libs/php/earthquakes.php",
		type: 'POST',
		dataType: 'json',
		data: {
			north: $('#pNorth').html(),
			south: $('#pSouth').html(),	
			east: $('#pEast').html(),
			west: $('#pWest').html(),
		},
		success: function(result) {
			if (!(jQuery.isEmptyObject(result))){
				$('#pTime').html(result['earthquakes'][0]['datetime']);
				$('#pMag').html(result['earthquakes'][0]['magnitude']);
				$('#pEError').html("");
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			$('#pEError').html(jqXHR+" "+textStatus+" "+errorThrown);
		}
	}),
	$.ajax({
		url: "libs/php/weather.php",
		type: 'POST',
		dataType: 'json',
		data: {
			north: $('#pNorth').html(),
			south: $('#pSouth').html(),	
			east: $('#pEast').html(),
			west: $('#pWest').html(),
		},
		success: function(result) {
			if (!(jQuery.isEmptyObject(result))){
				$('#pTemp').html(result['weatherObservations'][0]['temperature']);
				$('#pHum').html(result['weatherObservations'][0]['humidity']);
				$('#pWError').html("");
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			$('#pWError').html(jqXHR+" "+textStatus+" "+errorThrown);
		}
	})}); 
});