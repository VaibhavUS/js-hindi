// STRINGS IN JS

const name = "Vaibhav"
const repoCount = 51

// Old way of string concatination
console.log(name + " " + repoCount + " Value");

// New way of string concatination
console.log(`Hello my name is ${name} and my repository Count is ${repoCount}`);


// Creating string using new
const gameName = new String("Vaibhav-US")

console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)

//Applying some proto methods to manipulate the text in the gameName string
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(5)); // Shows the character saved at particular index number
console.log(gameName.indexOf('b')); // Shows the index number of particular character

const newString = gameName.substring(0, 4) // It does not includes last character of give end number
console.log(newString)

const newString1 = gameName.substring(-8, 4) // It does follows negative indexing and it starts from 0 by default
console.log(newString1)

const anotherString = gameName.slice(-8, 4) // Negative indexing allowed in slice method
console.log(anotherString)

const newStringOne = "    Vaibhav    "
console.log(newStringOne)
console.log(newStringOne.trim()) // It will remove all extra spaces after or before the input


const url = "https://vaibhav.com/vaibhav%20gurav"
console.log(url.replace('%20', '-')) // It will replace the original word with another word







