// a = [1, 2, 3];
// b = [4, 5, 6];

// c = [...a, ...b];

// console.log(c);

// let request = ["Please", "subscribe", "to", "WebTechTalk"];
// console.log(request[0], request[1], request[2], request[3]);
// console.log(...request);

// let obj1 = {name: "John", age: 23};
// let obj2 = {department: "IT"};
// let obj3 = {...obj1, ...obj2};
// console.log(obj3);

// function add (x, y) {
//     console.log(x + y);
// }

// function add (x, y, z) {
//     console.log(x + y + z);
// }

function add (...args) {
    let tot = 0;
    for (let num of args) {
        tot = tot + num;
    }
    console.log(tot);
}

add(5, 3, 4);