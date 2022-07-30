alert("Woo hoo !! You discovered a bonus feature..!")

var btnSubmit = document.querySelector("#btn-submit");
var date = document.querySelector('input[type="date"]');

var btnSubmit2 = document.querySelector("#btn-submit2");
var number = document.querySelector('input[type="number"]');

var btnClear = document.querySelector("#btn-clear");
var btnClear2 = document.querySelector("#btn-clear2");

var leapOutput = document.querySelector("#leap-year");
var primeOutput = document.querySelector("#prime-num");

btnSubmit.addEventListener("click",() => {
    var arr = date.value.split('-');
    leapOutput.innerHTML = checkLeapYear(arr[0]);
});

btnClear.addEventListener("click",() => {
    leapOutput.innerHTML = "";
    date.value = "";
});

btnSubmit2.addEventListener("click",() => {
    primeOutput.innerHTML = primeNumber(number.value);
});

btnClear2.addEventListener("click",() => {
    primeOutput.innerHTML = "";
    number.value = "";
});



function checkLeapYear(year){

    if(!year){
        return "Please select a date."
    }

    var str = `Cool! The year (${year}) in the date (${date.value}) you selected turned out to be a Leap Year.!!`;
    var str2 = `Ah! The year (${year}) in the date (${date.value}) you selected is just a normal year.!!`;

    if (year % 400 == 0) {
        return str;
    }
    else if (year % 100 == 0) {
        return str2;
    }
    else if (year % 4 == 0) {
        return str;
    }
    else {
        return str2;
    }
}

function primeNumber(num){
    var factors = [];
    if(num <= 0){
      alert("Please enter a positive number");
      return "Number should be greater than zero. ";
    }
    else{
      if(num === 1){
        return "The number one is neither a prime nor a composite. ";
      }
      else{
        for(var i=2; i<num ; i++){
          if(num%i == 0){
            factors.push(i);
          }
        }
        if(factors.length == 0){
          return "You entered a Prime number";
        }
        else{
          return ("You entered a composite number factors are : "+ factors);
        }
      }
    }
  }