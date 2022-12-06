function checkNumber(num) {
  console.log("The number is " + num);
  if (num < 25) {
    console.log("and it is lesser than 25");
  } else if (num > 25) {
    console.log("and it is greater than 25");
  } else {
    console.log("and it is equal");
  }
}

// checkNumber(25);

function checkGrade(mark) {
    if (mark > 90) {
        console.log("A grade");
    } else if (mark > 70) {
        console.log("B grade");
    } else if (mark > 50) {
        console.log("C grade");
    } else if (mark <= 50) {
        console.log("Fail");
    }
}

// checkGrade(75);

var num = 2;

switch(num) {
    case 1:
        console.log("The number is One");
        break;
    case 2:
        console.log("The number is Two");
        break;
    case 3:
        console.log("The number is Three");
        break;
    default:
        console.log("Not in the dictionary");
}
