
$("#searchBtn").on("click", function() {

	var searchTerm = "google";
	var Searchcount = "10";
	var startYear = "2014";
	var endYear = "2017";

	var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
	var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
 authKey + "&q=" +searchTerm ;

 	$.ajax({
		url: queryURLBase,
		method: 'GET',
	}).done(function(response) {
		console.log(response);
	});

});