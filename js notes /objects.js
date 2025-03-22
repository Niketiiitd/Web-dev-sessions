const mySym  = Symbol("key1");
// object literals
const person = {
    name : "John",
    age : 30,
    email : "gmail",
    hobbies : ["music", "movies"],
    "full name": "John Doe",
    [mySym] : "value"

}


// console.log(person);
// This a singleton object 
// const person = new Object();
// console.log("Keys:", Object.keys(person)); 

// behind the scenes name is saved as a string
// console.log(person["name"]);
// or
// console.log(person.name);

// console.log(person.full name); 
// console.log(person["full name"]);



person.greeting = function() {
    console.log("hello");
}

// console.log(person.greeting);
// console.log(person.greeting());
// person.name = "Jane";
// console.log(person.name);
// Object.freeze(person);
// person.name = "objjj";
// console.log(person.name);


person.address = {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  };

  // Access nested object properties
//   console.log("Street:", person["address"]["street"]);
//   console.log("City:", person.address.city);
  

const obj1 = {
    a : 1,
    b : 2,
    c : 3
}
const obj2 = {
    d: 4,
    e: 5,
}
const obj4 = {
    f: 6
}
// const obj3 = {
//     obj1,
//     obj2
// }


// obj3 = Object.assign({}, obj1, obj2,obj4);
// console.log(obj3);


const obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3);

const arr1 = [1,2];
const arr2 = [3,4];
const arr3 = [...arr1, ...arr2];

// console.log(arr1 + arr2);
// Static methods

// Object.assign()
// Object.create()
// Object.defineProperty()
// Object.defineProperties()
// Object.entries()
// Object.fromEntries()
// Object.freeze()
// Object.is()
// Object.isExtensible()
// Object.isFrozen()
// Object.isSealed()
// Object.keys()
// Object.preventExtensions()
// Object.seal()
// Object.values()
// Object.getOwnPropertyDescriptor()
// Object.getOwnPropertyDescriptors()
// Object.getOwnPropertyNames()
// Object.getOwnPropertySymbols()
// Object.getPrototypeOf()
// Object.setPrototypeOf()

// Instance methods (on Object.prototype)

// toString()
// valueOf()
// hasOwnProperty()
// propertyIsEnumerable()
// isPrototypeOf()
// toLocaleString()