// 7 types of primitive data types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// reference data types
// 1. Array
// 2. Object literals
// 3. Functions

// stack(Primitive), Heap (non primitive)

// eg

// stack memory 
let name1 = "hitesh";
let name2 = name1;
name2 = "suresh";

console.log(name2);
console.log(name1);
// what should be the output ?
// stack looks like this 
// name1 -> hitesh
// name2 -> hitesh (copy of the orginal is given here)
// name2 -> suresh



// Heap memory 
let user = {
    email : "gmail",
    pass : "1234"

}
let user2 = user;
user2.email = "yahoo";

console.log(user.email);
console.log(user2.email);
// what should be the output ?
// Reference is changed coz