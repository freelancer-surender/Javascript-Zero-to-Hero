// function multiply(a, b) {
//     console.log(b);
//     console.log(a * b);
// }

// function multiply(a, b = 4) {
//     console.log(b);
//     console.log(a * b);
// }

function multiply(a, b = 4, c = a + b) {
    console.log(a * b * c);
}

multiply(3);