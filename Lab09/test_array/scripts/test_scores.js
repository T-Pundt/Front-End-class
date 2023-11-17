"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

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
		headingnode.parentNode.replaceChild(resultsheading, headingnode);
	}

	







}

const addScore = () => {
	const name = $("#name").value;
	const score = parseFloat($("#score").value);
	let msgs = [];

	//add validity

	if(msgs.length == 0){
		names[names.length] = name;
		scores[scores.length] = score;
	}


}