
// NYT API KEY: 84afad745f424c2a9fa2f4e7ea4b4a5e
// Function for Submit

var a
$(docment).ready(function () {
	$("#search").on("submit", function(event) {
		event.preventDefault();
		console.log(event.currentTarget);
		var searchTerm = event.currentTarget[0].value;
		var numRecords = event.currentTarget[1].value;
		var startYear = event.currentTarget[2].value;
		var endYear =  event.currentTarget[2].value;

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=84afad745f424c2a9fa2f4e7ea4b4a5e&q="+searchTerm;

		// Validate Year variables
		startYear += "0101";
		endYear += "1231";
		queryURL += "&begin_date=" + startYear;
		queryURL += "&end_date=" + endYear;

		console.log(queryURL);

		$.ajax({url: queryURL, method: "GET"}).done(function(result) {
			console.log(result);
			
		});
	});
});

