'use strict'

let weekDay = 'Saturday';

switch(weekDay){
  case "Monday":
    console.log("Happy Monday");
    break;
  case "Tuesday":
    console.log("Happy Tuesday");
    break;
  case "Wednesday":
    console.log("Happy Wednesday");
    break;
  case "Thursday":
    console.log("Happy Thursday");
    break;
  case "Friday":
    console.log("Thank God it's Friday");
    break;
  default:
    console.log("Looks like its finally the weekend");
}


function bar (num) {
  if (num < 0) {
    console.log("num is a negative number");
  } else if (num > 0) {
    console.log("num is a positive number");
  } else if (num < 100) {
    console.log("num is less than 100");
  } else if (num === 100) {
    console.log("num is equal to 100");
  }
}

bar(100);
