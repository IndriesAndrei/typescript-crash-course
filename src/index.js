var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// typescript let us define type of variables
// to compile we install globally typescript: sudo npm i -g typescript
// and we run the command (tsc filename): tsc index
// to watch the changes all time: tsc --watch index
// will compile to a JavaScript file
var id = 5;
// to create a config file: tsc --init (will create a tsconfig.json file)
// typescript will give error if we want to assign variable type number to another type
// id = '5';
// console.log('ID:', id);
// Basic types
var number = 2;
var company = 'Traversy Media';
var isPublished = true;
var x = 'Hello Any Type';
var age;
age = 30;
// array that only contains number
var ids = [1, 2, 3, 4, 5];
// Tuple -> exact types inside the array (ex: array with numbers, strings, booleans)
// must be in particular order (like we declared the type)
var person = [1, 'Brad', true];
// Tuple Array
var employee;
employee = [
    [1, 'Brad'],
    [2, 'Andrew'],
    [3, 'Berica'],
];
// Unions (variable can be of multiple type)
var union = 20;
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
var user = {
    id: 1,
    name: 'John'
};
// Type Assertion -> if we want to change the type
var cid = 1;
var customerId = cid; // changing type from any to number
// Functions======================================
// each argument must be integer, and also the function return value
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 3));
// if we use type interface, we need to declare all properties( id, name and age)
var user1 = {
    id: 1,
    name: 'John'
};
// Classes ===================================
var Person = /** @class */ (function () {
    // constructor will run whenever the object or class is instantiated
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var brad = new Person(1, 'Brad');
var mike = new Person(2, 'Mike');
console.log(brad.register());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, 'Andrew', 'Developer');
console.log(emp.name);
// Generics -> for using reusable components ==================
// T is like a placeholder for type
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['brad', 'john', 'joe']);
numArray.push(2);
