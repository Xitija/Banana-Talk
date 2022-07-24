// ex01: setup
/* 
Banana Talk Repo created
Added index.html
Added initial commit and published repo
*/

// ex02: using javascript
/* 
var userName = prompt("What is your name?");
var msg = "Hello and Welcome " + userName + " !!";
alert(msg);
*/

// ex03: wiring button click
/* 
var btnTranslate = document.querySelector("#btn-translate");
console.log(btnTranslate);
btnTranslate.addEventListener("click",function clickEventHandler(){
    console.log("clicked!");
})
*/

// ex04: wiring textarea input
/*
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput);
function clickHandler(){
    console.log("input",txtInput.value);
}
btnTranslate.addEventListener("click",clickHandler);
*/


// var btnTranslate = document.querySelector("#btn-translate");
// var txtInput = document.querySelector("#txt-input");
// var outputDiv = document.querySelector("#output");

// ex05: wire a div to show output
/*

outputDiv.innerText = "Hello";
console.log(outputDiv);
function clickHandler(){
    outputDiv.innerText = "uidjksjskjj" + txtInput.value.toUpperCase();
}

*/
// btnTranslate.addEventListener("click",clickHandler);

// ex09: wire fetch call in app

/*

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text){
    return serverURL + "?text=" + text;
}

function errorHandler(err){
    console.log("An error occured", err);
    alert("Something went wrong , please try after sometime");
}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(errorHandler)
}

*/
