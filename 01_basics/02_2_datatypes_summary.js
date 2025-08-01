// DATATYPES IN JS SUMMARY

/* DATATYPES IN JS are devided into Premitive and Non-Premitive */

/*
* PREMITIVE DATATYPE -
    A primitive data type is the most basic type of data — it holds simple, single values (not objects, not collections).
    They are built-in to the language and are not made of other data types.

    Premitive Datatype are 'Call by Value'
    MEANS 'When you assign or pass a primitive variable to a function, a copy of the value is passed.
    Changes to that value do not affect the original'.

    Below are the 7 types of Premitive Datatype -

        let name = "John";      // String (primitive)
        let age = 25;           // Number (primitive)
        let isStudent = true;   // Boolean (primitive) [TRUE or FALSE]
        let score = null;       // Null (primitive) [means EMPTY not '0]
        let data;               // Undefined (primitive) [means Variable is declared but value not assigned]
        let id = Symbol();      // Symbol (primitive) [Used make any value UNIQUE]
        let bigIntNum = 123n;   // BigInt (primitive) [Used for Big values]


*/

/*
* NON-PREMITIVE (REFERNCE) DATATYPE -
    A non-primitive data type is a reference type — it can hold multiple values or more complex structures like objects, arrays, or functions.
    These are not stored as direct values, but as references (memory addresses) pointing to the actual data.


    Below are the types of Non-Premitive Datatype -

        let person = { name: "Alice", age: 30 }; // Object (non-primitive)
        let numbers = [1, 2, 3, 4, 5];           // Array (non-primitive)
        let greet = function() {                // Function (non-primitive)
        console.log("Hello!");
        };
        let today = new Date();                 // Date object (non-primitive)
        let pattern = /abc/i;                   // RegExp (non-primitive)
        let map = new Map();                    // Map (non-primitive)
        let set = new Set();                    // Set (non-primitive)


*/

/* 

NOTE ->

Que - JS is dynamically typed language or statically typed language
Ans - JavaScript is a dynamically typed language.
        What does "Dynamically Typed" mean?
            - You don’t need to declare the type of a variable.
            - The type is determined at runtime, based on the assigned value.
            - You can even change the type later by reassigning a different value.

EXTRA - If you want static typing in JavaScript, you can use TypeScript, which is a superset of JavaScript that adds type checking.
*/