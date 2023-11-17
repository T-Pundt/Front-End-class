// do not change anything in this area ////////
"use strict";                                //
                                             //
const region1 = [1540, 1130, 1580, 1105];    //
const region2 = [2010, 1168, 2305, 4102];    //
const region3 = [2450, 1847, 2710, 2391];    //
const region4 = [1845, 1491, 1284, 1575];    //
const region5 = [2120, 1767, 1599, 3888];    //
                                             //
///////////////////////////////////////////////

let sum = 0
let region_sums = [];

        document.write(`<h2>Sales by Quarter </h2>`);
        for(let i = 0; i<region1.length; ++i){
            sum = region1[i] + region2[i] + region3[i] + region4[i] + region5[i];
            document.write(`Q${parseInt(i)+1}: $${parseInt(sum)}<br>`)
        }

        document.write(`<h2>Sales by Region </h2>`);
      
        sum = 0;
        for(let i in region1){
        sum += region1[i];
        }
            region_sums[region_sums.length] = sum;
            document.write(`Region 1: $${parseInt(sum)}<br>`);
        
      
        sum = 0;
        for(let i in region2){
            sum += region2[i];
        }
            region_sums[region_sums.length] = sum;
            document.write(`Region 1: $${parseInt(sum)}<br>`);

        
        sum = 0;
        for(let i in region3){
            sum += region3[i];
        }
            region_sums[region_sums.length] = sum;
            document.write(`Region 1: $${parseInt(sum)}<br>`);

        
        sum = 0;
        for(let i in region4){
            sum += region4[i];
        }
            region_sums[region_sums.length] = sum;
            document.write(`Region 1: $${parseInt(sum)}<br>`);

        sum = 0;
        for(let i in region5){
            sum += region5[i];
        }
            region_sums[region_sums.length] = sum;
            document.write(`Region 1: $${parseInt(sum)}<br>`);

        
        document.write(`<h2>Total Sales </h2>`)
        sum = 0;
        for(let i in region_sums){
            sum += region_sums[i];
        }
        document.write(`$${parseInt(sum)}`);