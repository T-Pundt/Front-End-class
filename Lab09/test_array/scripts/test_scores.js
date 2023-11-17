"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];
$("#name").focus();

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});

const displayResults = () => {

	let average_score = 0;
	let max_score = 0;


	for(let score of scores){
		average_score = score + average_score;
	}
		average_score = average_score / scores.length;
		average_score = average_score.toFixed(0);

	max_score = Math.max(...scores);

	const averageScoreString = "Average score = " + average_score;
	const maxScoreString = "High score = " + max_score;

	

	const resultsheading = document.createElement("h2");
	const resultheadingtext = document.createTextNode("Results")
	resultsheading.appendChild(resultheadingtext);
	resultsheading.setAttribute('id', 'headone');
	const headingnode = document.getElementById('headone');
	if (headingnode == null){
		const parentofresultsheading = document.getElementById('results');
		parentofresultsheading.append(resultsheading);
	}
	else{
		headingnode.parentNode.replaceChild(resultsheading, headingnode);
	}



	
	const averageScorePar = document.createElement("p");
	const averageScoreText = document.createTextNode(averageScoreString);
	averageScorePar.appendChild(averageScoreText);
	averageScorePar.setAttribute('id', 'savg');
	const averageScoreParNode = document.getElementById('savg');
	if(averageScoreParNode == null){
		const parentofaveragescorepar = document.getElementById('results');
		parentofaveragescorepar.append(averageScorePar);
	}
	else{
		averageScoreParNode.parentNode.replaceChild(averageScorePar, averageScoreParNode);
	}



	const maxScorePar = document.createElement("p");
	const maxscoreParText = document.createTextNode(maxScoreString);
	maxScorePar.appendChild(maxscoreParText);
	maxScorePar.setAttribute('id', 'smax')
	const maxScoreParNode = document.getElementById('smax');
	if(averageScoreParNode == null){
		const parentofmaxscorepar = document.getElementById('results');
		parentofmaxscorepar.append(maxScorePar);	
	}
	else{
		maxScoreParNode.parentNode.replaceChild(maxScorePar, maxScoreParNode)
	}

}

const displayScores = () => {

	const thecontainer = document.getElementById('scores');
	thecontainer.textContent = "";

	const scoresheading = document.createElement("h2");
	const scoreheadingtext = document.createTextNode("Scores")
	scoresheading.appendChild(scoreheadingtext);
	scoresheading.setAttribute('id', 'headtwo');
	const headingnode = document.getElementById('headtwo')
	if (headingnode == null){
		const parentofscoresheading = document.getElementById('scores');
		parentofscoresheading.append(scoresheading);
	}
	else{
		headingnode.parentNode.replaceChild(scoresheading, headingnode);
	}

	for(var i = 0; i<scores.length; ++i){
		var string = names[i] + "	" + scores[i];
		const nameline = document.createElement("p");
		const namelineText = document.createTextNode(string);
		nameline.appendChild(namelineText);
		const parentofnameline = document.getElementById('scores')
		parentofnameline.append(nameline);


	}
	

}

const addScore = () => {
	const name = $("#name").value;
	const score = parseFloat($("#score").value);
	var indicator = 0;

	const nameerrorcontainer = document.getElementById('nameError');
	nameerrorcontainer.textContent = "";

	const scoreerrorcontainer = document.getElementById('scoreError');
	scoreerrorcontainer.textContent = "";

	if(name == ""){
		const namespan = document.getElementById('nameError');
		namespan.textContent = 'Please Enter a name';
		indicator = 1;
	}

	if(score>100 || score<0 || isNaN(score)){
		const scorespan = document.getElementById('scoreError')
		scorespan.textContent = 'Score must be between 0 and 100';
		indicator = 1;
	}

	if(indicator == 0){
		names[names.length] = name;
		scores[scores.length] = score;
	}

	$("#name").focus();

}