"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);


});


	

	const processEntry = () => {

		let errorMessage = "";
		var taxOwed;

		const taxableIncome = parseFloat($("#income").value);

		if(isNaN(taxableIncome) || taxableIncome<0){
			errorMessage += "A positive valid number must be entered. xx.xx"
		}


		if(errorMessage == ""){
			taxOwed = calculateTax(taxableIncome).toFixed(2);
		}
		else{
			alert(errorMessage);
		}

		$("#tax").value = taxOwed;
		$("#income").focus();

	}

	function calculateTax (taxableIncome){

		if(taxableIncome > 0 && taxableIncome < 9875){
			return (taxableIncome * .1);
		}

		else if(taxableIncome >= 9875 && taxableIncome < 40125){
			return 987.5 + ((taxableIncome-9875) * .12);
		}

		else if(taxableIncome >= 40125 && taxableIncome < 85525){
			return 4617.5 + ((taxableIncome-40125) * .22);
		}

		else if(taxableIncome >= 85525 && taxableIncome < 163300){
			return 14605.5 + ((taxableIncome-85525) * .24);
		}

		else if(taxableIncome >= 163300 && taxableIncome < 207350){
			return 33271.5 + ((taxableIncome-163300) * .32);
		}

		else if(taxableIncome >= 207350 && taxableIncome < 518400){
			return 47367.5 + ((taxableIncome-207350) * .35);
		}

		else if(taxableIncome >= 518400){
			return 156235 + ((taxableIncome-518400) * .37);
		}
	}