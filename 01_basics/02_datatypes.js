// DATA TYPES IN JS


"use stict" // treat all JS code as newer version

// alert(3 + 3) // This is for browser only as we're now using NodeJS so it's not going to work

// Now, When to use Semicolon(;) see below example

console.log(3 + 3); console.log("Vaibhav")
// So whenever we have to code like this we have to use Semicolon(;) BUT this not good in readability perspective


// Data types in JS

/*
JavaScript has 8 Datatypes

String
Number
Bigint
Boolean
Undefined - Declared variable but haven't assigned any value
Null - standalone value
Symbol - We use symbol to find uniqueness in components
Object

NOTE: A JavaScript variable can hold any type of data.

*/

// Examples

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


// to check type of any value
console.log(typeof "Vaibhav")

/*
for datatype null it's showed as object
for datatype undefined it's showed as undefined
*/

console.log("The Null is type of", typeof null)
console.log("The Undefined is type of", typeof undefined)