export const multiplication = (a, b) => {
    return a * b;
}

//___________________________________________________________________________

// ternary operator

let age = 18;
let message = (age >= 18) ? "You can vote" : "You can't vote";
console.log(message);

//___________________________________________________________________________

// object destructuring
const person = {
    "name": "John",
    "id":  123,
    "isMarried": false
}

console.log(person);

// const {name, id, isMarried} = person;
// console.log(name, id, isMarried);
// spread operator
const person2 = {...person, "name": "Ariffin"};

const {name, id, isMarried} = person2;
console.log(name, id, isMarried);

//___________________________________________________________________________

// array destructuring
// write array destructuring examples
const numbers = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = numbers;
console.log(a, b, c, d, e);
//___________________________________________________________________________

// arrow function
// write arrow function examples
const sum = (a, b) => {
    return a + b;
}
console.log(sum(5, 10));
//___________________________________________________________________________

// default parameter
// write default parameter examples
// write default parameter examples
const multiply = (a, b = 1) => {
    return a * b;
}
console.log(multiply(5));
//___________________________________________________________________________

// spread operator
// write spread operator examples
// write spread operator examples
const numbers2 = [1, 2, 3, 4, 5];
const numbers3 = [...numbers2, 6, 7, 8, 9];
console.log(numbers3);
//___________________________________________________________________________

// template string
// write template string examples
// write template string examples
// write template string examples
const name2 = "John";
const age2 = 30;
const message2 = `My name is ${name2} and I am ${age2} years old.`;
console.log(message2);
//___________________________________________________________________________


// class
// write class examples
// write class examples
// write class examples
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
}
// write class examples
// write class examples
// write class examples
//___________________________________________________________________________

// inheritance
// write inheritance examples
// write inheritance examples
// write inheritance examples
//___________________________________________________________________________

// module
// write module examples
// write module examples
// write module examples
//___________________________________________________________________________

// async/await
// write async/await examples
// write async/await examples
// write async/await examples
//___________________________________________________________________________

// generator
// write generator examples
// write generator examples
// write generator examples
//___________________________________________________________________________

// map
// write map examples
// write map examples
// write map examples
//___________________________________________________________________________

// reduce
// write reduce examples
// write reduce examples
// write reduce examples
//___________________________________________________________________________

// filter
// write filter examples
// write filter examples
// write filter examples
//___________________________________________________________________________

// reduce
// write reduce examples
// write reduce examples
// write reduce examples
//___________________________________________________________________________

// filter
// write filter examples
// write filter examples


