"use strict";

let investment = 0;


do {
    investment = parseFloat(prompt("enter investment amount as xxxxx.xx", 1000));
}
while (isNaN(investment));


let rate = 0;

do {
    rate = parseFloat(prompt("Enter interest rates as xx.x", 7.5));
}
while (isNaN(rate));


let years = 0;

do {
    years = parseInt(prompt("Enter number of years", 10));
}
while(isNaN(years));


let future_value = investment;

for (let i =1; i <=years; ++i){
    future_value += future_value * rate / 100;
}

document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest Rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${future_value.toFixed(2)}</p>`);
