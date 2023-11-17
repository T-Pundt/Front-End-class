"use strict"
const $ = selector => document.querySelector(selector);
const displayErrorMsg = msgs => {

    //create new ul image
    for(let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createElement(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node is not in the document then add it
    const node = $("ul");
    if (node == null) {
        //get form element
        const form = $("form");
        //add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form);
    }
    else{
        node.parentNode.replaceChild(ul, node);
    }

};


const processEntries = () => {
    // get form controls to check for validity
    const email = $("#email_address");
    const phone = $("#phone");
    const terms = $("#terms");

    //create and array for error messages
    const msgs = [];

    //check user entries for validity
    if (email.value == ""){
        msgs[msgs.length] = "Please enter an email adress.";
    }

    if (phone.value == ""){
        msgs[msgs.length] = "Please enter an phone number.";
    }

    if (terms.checked == false){
        msgs[msgs.length] = "You must agrees to the terms of serviece.";
    }

    //subit the form or throw errors
    if (msgs.length == 0) {
        //no eerror messgaes
        $("form").submit();
    }
    else {
        displayErrorMsg(msgs);
    }
};

const resetForm = () => {

    $("form").reset();

    //remove eorror mesages
    $("ul").remove();

    $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);
    $("#email_address").focus();
})