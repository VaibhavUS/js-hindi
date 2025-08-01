// VARIABLES IN JS


const accountId = 144553
// 1. Value cannot be change once assigned with const keyword.
let accountEmail = "vaibhav@gmail.com"
// 2. let is safer and more predictable. Used in Modern JS.
var accountPassword = "12345"
// 3. It's also used to define variable BUT Prefer not to use var because of issue in Block Scope and Funtional Scope
accountCity = "Pune"
// 4. Variables can be declared without let and var but it's not a good practice.
let accountState
// 5. Adding one more variable to check what default output we'll get


// Check 1.
//accountId = 123
console.log(accountId)


// Check 2., 3., 4. variable can be updated
accountEmail = "vg@gmail.com"
accountPassword = "54321"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])



