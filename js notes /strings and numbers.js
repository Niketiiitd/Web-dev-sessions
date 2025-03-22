const name1 = "John Doe";
// why `` is used ?
console.log(`Hello ${name1}`);
console.log("hello ${name1}");


// console.log(name1.concat(" Doe"," is a good"));
// charAt(), charCodeAt(), codePointAt()
// concat()
// includes(), indexOf(), lastIndexOf()
// match(), matchAll()
// normalize()
// padEnd(), padStart()
// repeat()
// replace(), replaceAll()
// search()
// slice()
// split()
// startsWith(), endsWith()
// substring(), substr()
// toLowerCase(), toUpperCase()
// toLocaleLowerCase(), toLocaleUpperCase()
// valueOf(), toString()

// trim(), trimStart(), trimEnd() 
// Remove whitespace from both sides of a string





// Number all functions
// Number()
// Instance methods

// toFixed()
// toExponential()
// toPrecision()
// toString()
// valueOf()
// Static methods


// Number.isFinite()
// Number.isInteger()
// Number.isNaN()
// Number.isSafeInteger()
// Number.parseFloat()
// Number.parseInt()


// Date 

// let myDate = new Date();
// console.log(myDate);


const currentDate = new Date();
console.log("Current Date:", currentDate);

// Convert date to a more readable string
console.log("Locale String:", currentDate.toLocaleString());

// Create a date from a specific string
const specificDate = new Date("2025-03-16");
console.log("Specific Date:", specificDate);

// Get individual parts of a date
console.log("Year:", currentDate.getFullYear());
console.log("Month (0-based):", currentDate.getMonth());
console.log("Day of Month:", currentDate.getDate());


