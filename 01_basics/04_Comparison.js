// COMPARISON IN JS

// 1. Simple comparison

console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log( 2 == 1)
console.log(2 != 1)


// 2. Some unusual comparison
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

/* NOTE -> The equality check (==) and comparison (>, <, >=, <=) works differently
        -> Comparisons convert null to a number, treating it as 0.
        -> That's why (3) null >= 3 is true and (1) null > 0 is false/
*/

// 3. For undefined
console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)


// 4. Now we'll use strict check using === (It will check strictly not only for value but also for datatype)

console.log("2" === 2) // It will strictly check for value as well as datatype


// SPECIAL NOTE -> Try to avoid converisons like 2. & 3.