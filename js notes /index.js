
console.log("Hello World");

// const can't be redifined
const var1 = 10;
// var1 = 20;
// const var1 = 20;
//  let can be redefined
let var2 = 20;
var2 = 30;
var2 = 40;
console.log(var1, var2);




// Why avoid var?
// var has function scope (rather than block scope) and is hoisted, 
// which can cause unintended behavior. Using let or 
// const ensures block scoping and more predictable variable handling.

var var3 = 30;
// example to show that var not to be used
function exampleVar() {
    var x = 10;
    if (true) {
      var x = 20; 
      console.log("Inside block var x:", x); // 20
    }
    console.log("Outside block var x:", x);   // 20
  }
  
  // Using let in a block
  function exampleLet() {
    let y = 10;
    if (true) {
      let y = 20; 
      console.log("Inside block let y:", y); // 20
    }
    console.log("Outside block let y:", y);   // 10
  }
  
  exampleVar();
  exampleLet();