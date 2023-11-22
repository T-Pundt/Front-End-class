"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const caption = $("#caption");
    const mainImage = $("#main_image");

    // get all the <a> tags in the ul element
    const links = $("#image_list").querySelectorAll("a");

    //process the image links
    const imageCache = [];
    let image = null;
    for(let link of links){
        image = new Image();
        image.src = link.href;
        image.alt = link.title;
        imageCache[imageCache.length] = image;
    }

    //Start slide show
    let imageCounter = 0;
    setInterval( () => {
        imageCounter = (imageCounter +1) % imageCache.length;

        //get image from the array
        image = imageCache[imageCounter];
        mainImage.src = image.src;
        mainImage.alt = image.alt;
        caption.textContent = image.alt;
    }, 2000); //2 second interval
})