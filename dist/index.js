"use strict";
// typescript let us define type of variables
// to compile we install globally typescript: sudo npm i -g typescript
// and we run the command (tsc filename): tsc index
// to watch the changes all time: tsc --watch index
// tsc -w -> watch all files
// will compile to a JavaScript file
// to compile only in the src folder ts files we add in tsconfig.json:  
// "include": [
//    "src"
// ]
let id = 5;
// to create a config file: tsc --init (will create a tsconfig.json file)
// we can set up rootDir and outDir:  "rootDir": "./src",  "outDir": "./dist",       
// typescript will give error if we want to assign variable type number to another type
// id = '5';
// console.log('ID:', id);
// Basic types
let number = 2;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello Any Type';
let age;
age = 30;
// array that only contains number
let ids = [1, 2, 3, 4, 5];
// Tuple -> exact types inside the array (ex: array with numbers, strings, booleans)
// must be in particular order (like we declared the type)
let person = [1, 'Brad', true];
// Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Andrew'],
    [3, 'Berica'],
];
// Unions (variable can be of multiple type)
let union = 20;
// Enum -> enumerated type (allow us to define a set of named constants)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right"; // 3
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // 0
// --------------===================================
// Objects
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion -> if we want to change the type
let cid = 1;
let customerId = cid; // changing type from any to number
// Functions======================================
// each argument must be integer, and also the function return value
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 3));
// if we use type interface, we need to declare all properties( id, name and age)
const user1 = {
    id: 1,
    name: 'John'
};
// Classes ===================================
class Person {
    // constructor will run whenever the object or class is instantiated
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
console.log(brad.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // initialize these from PErson class, that we extended
        this.position = position;
    }
}
const emp = new Employee(3, 'Andrew', 'Developer');
console.log(emp.name);
// Generics -> for using reusable components ==================
// T is like a placeholder for type
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'joe']);
numArray.push(2);
