//console.log("main debug");


//initialize function called when the script loads
  function initialize(){
		console.log('initialize');
		cities();
};


//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];
	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
		addColumns(cityPop);
		//addEvents();*/

};

function addColumns(cityPop){

	console.log("addColumns");
	console.log(cityPop);

	$('tr').each(function(i){

	    	if (i == 0){

	    		$(this).append('<th>City Size</th>');
	    	} else {

	    		var citySize;

	    		if (cityPop[i-1].population < 100000){
	    			//console.log("Small");
						citySize = 'Small';
						//console.log(citySize);

	    		} else if (cityPop[i-1].population < 500000){
						//console.log("Medium");
						citySize = 'Medium';
						//console.log(citySize);


	    		} else {
						//console.log("Large");
						citySize = 'Large';
						//console.log(citySize);

	    		};
					console.log(citySize);
	    		$(this).append('<td>' + citySize + '</td>');
	    	};
    });
};
/*
function addEvents(){

	$('#table').mouseover(function(){

		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += "random";

			if (i<2){
				color += ",";

			} else {
				color += ")";
		};

		$(this).css('color', color);
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};
*/


//call the initialize function when the document has loaded
$(document).ready(initialize);
