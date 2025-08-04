// DATES IN JS


let myDate = new Date() // Creating new instance of a Date
console.log(myDate) 
console.log(myDate.toString()) // Converting date to string for more readability

//Below are some examples of some date readability formats

console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate) // Type of date is 'object'

// Below are some methods to declaring dates

let myCreatedDate = new Date(2025, 7, 23) // In JS months starts from 0 that means Jan is 0, Feb is 1 and so on...
console.log(myCreatedDate.toDateString())

let myCreatedDate1 = new Date(2025, 7, 23, 15, 3) // Specifiying date with time
console.log(myCreatedDate1.toLocaleString())

let myCreatedDate2 = new Date("2025-01-23") // Specifiying date with DDMMYYYY format (In DDMMYYYY format the month count start from 1)
console.log(myCreatedDate2)

// Time stamps

let myTimeStamp = Date.now()
console.log(myTimeStamp)


// Extracting Month, Year, Date from the give myDate object

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getDay());
console.log(newDate.getFullYear());










