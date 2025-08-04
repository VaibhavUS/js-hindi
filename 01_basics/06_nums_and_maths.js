// NUMBERS AND MATHS IN JS


/* ******************** NUMBERS ******************** */

const score = 400 // this is automatically defined as number
console.log(score)

const balance = new Number(100) // but in this case we have specially mentioned this as a number
console.log(balance);

console.log(balance.toString().length) // converted number into string using toString() to use string operations

console.log(balance.toFixed(2)) // to control decimal digits or precision value

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)) // It will take the value given in precision and round-off the last digit

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // It will convert the currency into local format by DEFAULT IT'S US STANDARDS


/* ******************** MATHS ******************** */


console.log(Math); 
console.log(Math.abs(-4)) // absolute value it will change the negative value into positive
console.log(Math.round(4.6)) // It will round off to the nearer value
console.log(Math.ceil(4.2)) // It will select the TOP value as name suggest Ceil(Top)
console.log(Math.floor(4.2)) // It will select the BOTTOM value opposite to ceil
console.log(Math.min(4, 3, 6, 5, 7, 9)) // It will select the minimum value from the array
console.log(Math.max(4, 3, 6, 5, 7, 9)) // It will select the maximum value from the array

console.log(Math.random()) // It generates value from 0 to 1 only
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) +1 )

/* NOTE - We can play around the randon() function to get desired output of randomly generated number.
Eg. Rolling a dice and getting output from 1 to 6

*/

// See below example for rolling dice and expecting output from 1 to 6 only

const min = 1
const max = 6

console.log("Rolling Dice Result: ", Math.floor(Math.random() * (max - min + 1)) + min);






