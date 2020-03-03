d3.csv('data.csv').then(function(data) {

	var income = data.map(data => data.income);

	var state = data.map(data => data.abbr);

	var smokes = data.map(data => data.smokes);

	var trace = {
	x: income,
	y: smokes,
	type: 'scatter',
	mode: 'markers+text',
	text: state,
	textposition: 'center',
	font: {color: '#ffffff'},
	marker: {size: 25, color: '#8adefa'},
	textcolor: '#ffffff'
	};

	var plotData = [trace];

	var layout = {
	title: 'Percentage of Smokers by State as Average Income Increases',
	xaxis: {title: 'Average Income'},
	yaxis: {title: 'Percentage of Population that Smokes'}
	};

	Plotly.newPlot('scatter', plotData, layout);

});

