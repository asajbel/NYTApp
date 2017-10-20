
// NYT API KEY: 84afad745f424c2a9fa2f4e7ea4b4a5e
// Function for Submit

$(document).ready(function () {
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

			var resultDocs = result.response.docs;
			for (var i =0; i<numRecords; i++) {
				var value = resultDocs[i];

				//  Create the elements

				var article = new $("<div>");
				article.addClass("article");
				var headLine = new $("<h3>").text(value.headline.main);
				article.append(headLine);

				var byLine = new $("<h5>").text(value.by_line.original);
				article.append(byLine);

				var section = new $("<h5>").text("Section: " + value.section);
				article.append(section);

				var pubDate = new $("<h5>").text(value.pub_date);
				article.append(pubDate);

				var url = new $("<a>").text(value.web_url);
				url.attr("href", value.web_url);
				url.attr("target", "_blank");
				article.append(url);

				$("#display").append(article);
			};
			
		});
	});
});

