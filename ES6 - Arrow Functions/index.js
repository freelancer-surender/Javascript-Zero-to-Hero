// function add(a, b) {
//     let c = a + b;
//     return c;
// }

// const add = function (a, b) {
//     let c = a + b;
//     return c;
// }

// const add = (a, b) => {
//     let c = a + b;
//     return c;
// }

// const add = (a, b) => a + b;

// console.log(add(2, 3));

// const greet = (name) => {
//     return "Hello " + name;
// }

// const greet = name => "Hello " + name;

// const greet = () => "Hello World";

// console.log(greet("World"));

function Employee() {
    this.firstName = "John";
    this.lastName = "Mathew";
    this.fullName = function() {
        console.log(this.firstName + " " + this.lastName);
        // function greet() {
        //     this.firstName = "Some";
        //     console.log("Hello " + this.firstName);
        // }
        const greet = () => {
            console.log("Hello " + this.firstName);
        }
        greet();
    }
}

emp = new Employee();
emp.fullName();