const myArr = [0,1,2,3,4,5,"niket"];
console.log(myArr);
// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
console.log(myArr[0]);

// Are 0 indexed

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// What are shallow copies
// Share same refrence point to the same memory location
// More formally, two objects o1 and o2 are shallow copies if:

// They are not the same object (o1 !== o2).
// The properties of o1 and o2 have the same names in the same order.
// The values of their properties are equal.
// Their prototype chains are equal.


// What are deep copies
// do not share the same reference point to the same memory location
// Two objects o1 and o2 are structurally equivalent if their observed behaviors are the same. These behaviors include:

// The properties of o1 and o2 have the same names in the same order.
// The values of their properties are structurally equivalent.
// Their prototype chains are structurally equivalent (although when we deal with structural equivalence, these objects are usually plain objects, meaning they both inherit from Object.prototype).




// Array methods 


const arr = [1, 2, 3, 4, 5];

//  1. concat()
console.log("concat:", arr.concat([6, 7]));

//  2. copyWithin(target, start, end)
const copyArray = [1, 2, 3, 4, 5];
copyArray.copyWithin(0, 3);
console.log("copyWithin:", copyArray);

//  3. entries()
for (const [index, value] of arr.entries()) {
  console.log("entries:", index, value);
}

//  4. every()
console.log("every > 0:", arr.every(num => num > 0));

//  5. fill()
const fillArr = [1, 2, 3, 4, 5];
fillArr.fill(0, 2, 4);
console.log("fill:", fillArr);

//  6-7. filter() / find()
console.log("filter > 2:", arr.filter(num => num > 2));
console.log("find > 3:", arr.find(num => num > 3));

//  8-9. findIndex() / findLastIndex() (Node 18+)
console.log("findIndex > 3:", arr.findIndex(num => num > 3));
// console.log("findLastIndex > 3:", arr.findLastIndex(num => num > 3)); // If supported

// 10-11. flat() / flatMap()
const nested = [1, [2, 3], [[4], 5]];
console.log("flat:", nested.flat(2));
console.log("flatMap:", [1, 2, 3].flatMap(x => [x, x * 2]));

// 12. forEach()
arr.forEach(num => console.log("forEach:", num));

// 13. includes()
console.log("includes(3):", arr.includes(3));

// 14-15. indexOf() / lastIndexOf()
console.log("indexOf(3):", arr.indexOf(3));
console.log("lastIndexOf(3):", [1, 3, 3, 2].lastIndexOf(3));

// 16. join()
console.log("join:", arr.join("-"));

// 17. keys()
const keys = arr.keys();
for (const key of keys) console.log("keys:", key);

// 18. map()
console.log("map x2:", arr.map(x => x * 2));

// 19-20. pop() / push()
const popArr = [...arr];
console.log("pop:", popArr.pop());
popArr.push(99);
console.log("push:", popArr);

// 21-22. reduce() / reduceRight()
console.log("reduce:", arr.reduce((acc, val) => acc + val, 0));
console.log("reduceRight:", arr.reduceRight((acc, val) => acc - val, 0));

// 23. reverse()
const rev = [...arr].reverse();
console.log("reverse:", rev);

// 24-25. shift() / unshift()
const shiftArr = [...arr];
console.log(shiftArr);
console.log("shift:", shiftArr.shift(1));
console.log(shiftArr);
shiftArr.unshift(0);
console.log("unshift:", shiftArr);

// 26. slice()
console.log("slice(1,3):", arr.slice(1, 3));

// 27. some()
console.log("some > 4:", arr.some(num => num > 4));

// 28. sort()
const sortMe = [5, 2, 4, 3, 1];
console.log("sort:", sortMe.sort());

// 29. splice()
const spliceArr = [...arr];
spliceArr.splice(2, 2, "new");
console.log(arr);
console.log("splice:", spliceArr);
// array.splice(start, deleteCount, ...itemsToAdd)

// 30. toLocaleString(), 31. toString()
console.log("toLocaleString:", arr.toLocaleString());
console.log("toString:", arr.toString());

// 32. values()
for (const val of arr.values()) {
  console.log("values:", val);
}

// Static methods
console.log("Array.from('abc'):", Array.from("abc"));
console.log("Array.isArray(arr):", Array.isArray(arr));
console.log("Array.of(7, 8, 9):", Array.of(7, 8, 9));

