
var coll = document.querySelector(".collapsible");
// var content = this.nextElementSibling;
var content = document.querySelector(".content");
var btnTranslate = document.querySelector("#btn-translate");
var btnClear = document.querySelector("#btn-clear");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

coll.addEventListener("click", function() {
    // The classList property returns the CSS classnames of an element.
    // Toggle between adding and removing a class name from an element with JavaScript.

    this.classList.toggle("active"); // try another class
    // console.log(this);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

function getTranslationURL(text){
    return serverURL + "?text=" + text;
}

function errorHandler(err){
    console.log("An error occured", err);
    alert("Something went wrong , please try after sometime");
}

function clickHandler(){
  var inputText = txtInput.value;
  if(inputText.trim()){
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => outputDiv.innerHTML = json.contents.translated)
    .catch(errorHandler)
  } else {
    outputDiv.innerHTML = "";
  }
}

btnTranslate.addEventListener("click",clickHandler);

btnClear.addEventListener("click",() => {
  outputDiv.innerHTML = "";
  txtInput.value = "";
})