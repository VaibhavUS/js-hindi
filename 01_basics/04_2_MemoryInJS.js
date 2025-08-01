// MEMORY TYPES IN JS


/* 

There are TWO MEMORY types in JS

    1) Stack Memory
    2) Heap Memory

1) Stack Memory (Call Stack) — for Primitive data 
        
    - Used for storing simple, fixed-size data like:

    - Numbers, Strings, Booleans, undefined, null, symbol, bigint

    - Stored in a last-in, first-out (LIFO) manner.

    - Fast access and automatically cleaned up after function execution.

    EXAMPLE -
        let a = 10;         // Stored in stack
        let name = "John";  // Stored in stack

2) Heap Memory — for Non-Primitive data (Reference types)

    - Used for storing complex or dynamic data like:

    - Objects, Arrays, Functions

    - Variables hold a reference (pointer) to the memory location in the heap.

    - Managed automatically by JavaScript’s garbage collector.

    EXAMPLE -
        let person = { name: "Alice" }; // Object is stored in heap, reference is in stack


* Behind the Scenes:

    let user = { name: "Sam" };

    In above example -

    - user (the reference) is stored in the stack.
    - The actual object { name: "Sam" } is stored in the heap.



* Bonus: Garbage Collection
    
    - JavaScript automatically removes unused data from memory (especially in the heap).
    - Uses algorithms like Mark and Sweep to detect unreachable data.

*/

// STACK MEMORY EXAMPLE -

let myYoutubename = "Vaibhav Channel"

let anotherName = myYoutubename
anotherName = "Another Channel"

console.log(myYoutubename);
console.log(anotherName);




// HEAP MEMORY REFERENCE EXAMPLE -

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl" 

}

let userTwo = userOne

userTwo.email = "vaibhav@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

// NOTE - In this example the reference is given so whenever we change the value it will reflects in real memory.

