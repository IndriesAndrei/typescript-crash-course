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
let id: number = 5;

// to create a config file: tsc --init (will create a tsconfig.json file)
// we can set up rootDir and outDir:  "rootDir": "./src",  "outDir": "./dist",       

// typescript will give error if we want to assign variable type number to another type
// id = '5';

// console.log('ID:', id);

// Basic types
let number: number = 2;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello Any Type';
let age: number;

age = 30;

// array that only contains number
let ids: number[] = [1, 2, 3, 4, 5];

// Tuple -> exact types inside the array (ex: array with numbers, strings, booleans)
// must be in particular order (like we declared the type)
let person: [number, string, boolean] = [1, 'Brad', true];

// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Andrew'],
    [3, 'Berica'],
]

// Unions (variable can be of multiple type)
let union: string | number = 20;

// Enum -> enumerated type (allow us to define a set of named constants)
enum Direction1 {
    Up, // 0
    Down, // 1
    Left, // 2
    Right // 3
}

console.log(Direction1.Up) // 0

// --------------===================================
// Objects
const user: {
    // we can specify what type we expect in the object
    id: number,
    name: string
} = {
    id: 1,
    name: 'John'
}

// Type Assertion -> if we want to change the type
let cid: any = 1;
let customerId = <number>cid // changing type from any to number

// Functions======================================
// each argument must be integer, and also the function return value
function addNum(x: number, y: number): number {
    return x + y;
}

console.log(addNum(1, 3));

// Interfaces -=====================================
interface UserInterface {
    id: number,
    name: string,
    age?: number // optional property (age?)
}

// if we use type interface, we need to declare all properties( id, name and age)
const user1: UserInterface = {
    id: 1,
    name: 'John'
}

// Classes ===================================
class Person {
    id: number
    name: string

    // constructor will run whenever the object or class is instantiated
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad')
const mike = new Person(2, 'Mike')

console.log(brad.register())

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name); // initialize these from PErson class, that we extended
        this.position = position
    }
}

const emp = new Employee(3, 'Andrew', 'Developer')
console.log(emp.name)

// Generics -> for using reusable components ==================

// T is like a placeholder for type
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'john', 'joe'])

numArray.push(2)
