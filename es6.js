// const and let 
let age = 20; // can be reassigned
const name = 'ariffin';  // cannot be reassigned


//___________________________________________________________________________

// arrow function

// traditional
function add1(a,b) {
   console.log(a+b);
}



// arrow function
const add2 = (a,b) => {
  console.log(a+b);
}

console.log('\n' + '-Arrow function-' + '\n');

add2(2,4);

//OR

const add3 = (a,b) => console.log(a+b);

const arr1 = [1, 2, 3];

arr1.map(n => console.log('arr1', n));

// template string

const greeting = (name) => {
  const string = 'Hello, ' + name + '!';
  const templateString = `Hello, ${name}!`; //jquery
  console.log(templateString);
}

console.log('\n' + '-Template string-' + '\n');

greeting('Ariffin');

//___________________________________________________________________________

// default parameter

const add = (a = 2,b = 2) => console.log(a+b); 

console.log('\n' + '-Default parameter-' + '\n');
add(); // a and b will be 2 respectively (default parameters)

add(3, 3); // overwrite

//___________________________________________________________________________

// array destructuring

const arr2 = [1, 2, 3]

const [first, , third] = arr2;

console.log('\n' + '-Array destructuring-' + '\n');

console.log(first, third);

//___________________________________________________________________________

// object destructuring

const object = {
   channelName: 'ariffinVlog',
   views: 1500,
}

console.log('\n' + '-Object destructuring-' + '\n');

console.log(object.channelName);

// with object destructuring

const {channelName, views} = object;

console.log(channelName, views);

//___________________________________________________________________________
   
// rest operator

console.log('\n' + '-Rest operator-' + '\n');

const add4 = (...numbers) => console.log(numbers.reduce((a,b) => a+b,0));

add(41, 2, 3, 4, 5, 6, 7);

//___________________________________________________________________________

// spread operator

console.log('\n' + '-Spread operator-' + '\n');

const arr3 = [1, 2, 3];

console.log(...arr3);
