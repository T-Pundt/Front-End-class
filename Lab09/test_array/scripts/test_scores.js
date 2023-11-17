"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];
let indicator = false;

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
	const parentofresultsheading = document.getElementById('scores');
	parentofresultsheading.append(resultsheading);

	
	
	const averageScorePar = document.createElement("p");
	const averageScoreText = document.createTextNode(averageScoreString);
	averageScorePar.appendChild(averageScoreText);
	const parentofaveragescorepar = document.getElementById('scores');
	parentofaveragescorepar.append(averageScorePar);

	const maxScorePar = document.createElement("p");
	const maxscoreParText = document.createTextNode(maxScoreString);
	maxScorePar.appendChild(maxscoreParText);
	const parentofmaxscorepar = document.getElementById('scores');
	parentofmaxscorepar.append(maxScorePar);

	indicator = true;
}

const displayScores = () => {


	const newparagah = document.createElement("p");
	const text = document.createTextNode(names);
	newparagah.appendChild(text);

	const theheading = $("scores");
	const parent = theheading;

	parent.appendChild(newparagah);


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