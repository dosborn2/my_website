function initialize(){
    cities();
};

function cities(){
    var citiesObj = {
      'Madison' : 233209,
      'Milwaukee': 594833,
      'Green Bay': 104057,
      'Superior': 27244
    };
    console.log(citiesObj);
    $('#mydiv').append('<table><tr id="headerRow">');
    $('#headerRow').append('<th>City</th>');
    $('#headerRow').append('<th>Population</th>');

    // var cities = [
    //     'Madison',
    //     'Milwaukee',
    //     'Green Bay',
    //     'Superior'
    // ];
    // var population = [
    //     233209,
    //     594833,
    //     104057,
    //     27244
    // ];

    // var table = document.createElement("table");
    //
    // var headerRow = document.createElement("tr");
    //
    // var cityHeader = document.createElement("th");
    // cityHeader.innerHTML = "City";
    // headerRow.appendChild(cityHeader);
    //
    // var popHeader = document.createElement("th");
    // popHeader.innerHTML = "Population";
    // headerRow.appendChild(popHeader);
    //
    // table.appendChild(headerRow);

    for (var cityKey in citiesObj){
        var rowHtml = "<tr><td>" + cityKey + "</td><td>" + citiesObj[cityKey] + "</td></tr>";
        console.log(cityKey, citiesObj[cityKey]);
        $('table').append(rowHtml);
    //     var tr = document.createElement("tr");
    //
    //     var city = document.createElement("td");
    //     city.innerHTML = cities[i];
    //     tr.appendChild(city);
    //
    //     var pop = document.createElement("td");
    //     pop.innerHTML = population[i];
    //     tr.appendChild(pop);
    //
    //     table.appendChild(tr);
    };

    // var mydiv = document.getElementById("mydiv");
    // mydiv.appendChild(table);
    addColumns(citiesObj);
};
function addColumns(cityPop){

    $('tr').each(function(i){

    	if (i == 0){

    		$(this).apend('<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citysize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

    		$this.append('<td' + citySize + '</td>');
    	};
    });
};

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
window.onload = initialize();
