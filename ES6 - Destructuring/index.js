// let numbers = [1, 2, 3, 4, 5];

// let a = numbers[0];
// let b = numbers[1];
// let c = numbers[2];

// [a, b, c] = numbers;
// [a, , b, c] = numbers;
// [a, b, ...c] = numbers;

// console.log("a: " + a);
// console.log("b: " + b);
// console.log("c: " + c);

let employee = {
    id: 123,
    firstName: "John",
    age: 23,
    department: "IT",
    location: "India"
}

// let id = employee.id;
// let firstName = employee.firstName;
// let department = employee.department;

let { id, firstName, department } = employee;

console.log(id);
console.log(firstName);
console.log(department);