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



/* ******************** MATHS ******************** */
