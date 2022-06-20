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

// ex05: wire a div to show output
/*
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
outputDiv.innerText = "Hello";
console.log(outputDiv);
function clickHandler(){
    outputDiv.innerText = "uidjksjskjj" + txtInput.value.toUpperCase();
}
btnTranslate.addEventListener("click",clickHandler);
*/