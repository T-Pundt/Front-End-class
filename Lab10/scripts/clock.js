"use strict";

let seconds = 0;
let hours = 0;
let minutes = 0;
let am = 1;
let pm = 0;


const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const sec = document.getElementById('seconds');
    const min = document.getElementById('minutes');
    const hr = document.getElementById('hours');
    const day_night = document.getElementById('ampm'); 


    if(seconds == 60){
        ++ minutes;
        seconds = 0;
    }
    if(minutes == 60){
        ++hours;
        minutes = 0;
    }

    if(am == 1){
        if(hours <= 12){
            day_night.textContent = "am";
            if(hours == 12){
                day_night.textContent = "pm"
            }
        }
        else{
            am = 0;
            pm = 1
            hours = 1;
        }
    }

    if(pm == 1){
        if(hours < 12){
            day_night.textContent = "pm"
        }
        else{
            pm = 0;
            am = 1;
            hours = 0;
        }
    }


    sec.textContent = padSingleDigit(seconds);
    min.textContent = padSingleDigit(minutes);
    hr.textContent = padSingleDigit(hours);

};


document.addEventListener("DOMContentLoaded", () => {
	// set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.

    setInterval( () => {
        ++ seconds;
        displayCurrentTime();

    }, 1000); //1 second interval
});