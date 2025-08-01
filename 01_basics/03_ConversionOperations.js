// CONVERSION AND OPERATIONS IN JS

// -> Conversion in JS means converting string into number or vice-versa or conversion like this

let score = "33"

// checking the datatype of variable score

console.log(typeof score)
console.log(typeof(score)) // using as a method

let valueInNumber = Number(score) // Converting string into number datatype
console.log(typeof(valueInNumber))

// In other scenario

let scoreNew = "33abc" // This is not a pure number

// checking the datatype of variable score

console.log(typeof scoreNew)
console.log(typeof(scoreNew)) // using as a method

let valueInNumberNew = Number(scoreNew) // Converting NotPureString into number datatype
console.log(typeof(valueInNumberNew))
console.log(valueInNumberNew) // It's show NaN means Not a Number (NaN is also a Special Type)

// NOW CONVERTING NUMBER INTO BOOLEAN

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// NOW CONVERTING NUMBER INTO STRING

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof(stringNumber))
console.log(stringNumber)
 
/*

SUMMARY FOR TYPE CONVERSION

-- FOR NUMBER
1) "33" => 33
2) "33abc" => NaN (Not a Number) but still it is type of number
3) true => 1 | false => 0
4) null => 0
5) undefined => NaN

-- FOR BOOLEAN
1) 1 => true | 0 => false
2) "" => false
3) "vaibhav" => true

*/