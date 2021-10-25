// Basics of JavaScript (// for single line comment)

/*
    (Multiline syntax here)
    -- Variable Declaration --
    Primitive Types: integer, floats, booleans, strings, arrays, objects(looks like a dictionary)
    Functions in JavaScript
    Looping in JavaScript
*/
var first_name;
// var, let, const

// String Variable
var first_name = 'Bobby';

// Display our value inside of JS console
console.log(first_name)

// Integer Variable
var some_number = 5;

// Display Integer
console.log(some_number)

// Float Variable
var some_float = 3.14;

console.log(some_float)

// Array Variable
var some_array = [2,4,6,8,10];
console.log(some_array)

// Object Variable
var some_object = {
    'test': 'Please Test Me!',
    'num': 17
};
console.log(some_object)

// Difference between variable declaration keywords
// Var - Global Scope
// let - Block level scope
// const - same as let but it has a costant value

// JAVASRIPT HOISTING EXAMPLE
console.log(some_random_variable)

var some_random_variable = 'random string!';
console.log(some_random_variable)

// A Better way of Declaring a variable is by using let or const
// Example
// console.log(full_name) - expect an error here
let full_name = first_name + ' Temple';
console.log(full_name)


// Example of const
const car = 'Lambo';
console.log(car) //Expected output 'Lambo'
//car = 'Subaru'; Exepct a typeError since we can't reassign const

//Reassign 'let' variable
full_name = 'Joel Carter';
console.log(full_name)


/* 
    Basic Math Operations in JS
*/

// Addition
let sum = 5 + 5; // sum += 5
console.log(sum)

// Subtraction
let diff = 5 - 5; // diff -= 5
console.log(diff)

//Multiplication
let product = 5 * 5; // product *= 5
console.log(product)

// Division
let divide = 5 / 5; // divide /= 5
console.log(divide)

//Exponential
let square = 5**2; // square **= 2
console.log(square)

// Modulo -- remainder operator
let remainder = 12 % 5;
console.log(remainder)

// More Math operations
// Finding the Floor of a decimal
let find_floor = Math.floor(35.9);
console.log(find_floor)

// Finding the ceiling of a decimal
let find_ceil = Math.ceil(35.9);
console.log(find_ceil)

// Mind Bender
let crazy_stuff = some_float + '4';
console.log(crazy_stuff)

// Mind Bender 2
let more_crazy = some_float + parseFloat('4'); // 7.14
console.log(more_crazy)

/* 
    ==== JS Functions ====
*/

// Regular named function
function addNums(){
    let x = 5;
    let y = 10;

    return x + y
};

// calling the function (and displaying in the console)
console.log(addNums())

// Regular named function with parameters
function addNums2(x,y){
    return x + y
};
console.log(addNums2(5, 10))


// defining a function as a variable
let addNums3 = function(x,y){
    return x + y
};
console.log(addNums3(2,3))

// ES6+ Arrow Function syntax (no params)
let multiplyNums = () => {
    let num = 4;
    let num2 = 5;

    return num * num2
};

console.log(multiplyNums())

/*
    ES6 Syntax with params
    SINGLE PARAMETER - does not need parens around it, multiple parameters do
*/

let cubed = (num) => {
    return num ** 3
};

let cubed2 = num => {
    return num ** 3
};

console.log(cubed(3))
console.log(cubed(2))


const doubleNum = (num1, num2) => {
    return (num1 * 2) + (num2 * 2)
};

console.log(doubleNum(2,2))

// JS Closure
// Self-Invoking Function
console.log((function(name){
    let hello = 'Hello World ' + name;
    return hello 
})('Nate'))


// JavaScript Control FLow
// If (conditional) Statements

let determineAge = (age) => {
    if (age < 18){
        return 'Minor'
    } else if (age <= 65){
        return 'Adult'
    } else {
        return 'Senior'
    }
};
console.log(determineAge(7))
console.log(determineAge(40))
console.log(determineAge(85))

// JavaScript Ternary Operator

let determineAgeGroup = (age) => {
    return (age < 18) ? 'Minor': (age <= 65) ? 'Adult' : 'Senior'
};

console.log(determineAgeGroup(45))

// AND + OR in conditions

let first = 'Coding';
let last = 'Temple';

// AND (&&)

if (first == 'Coding' && last == 'Temple'){
    console.log("That's my school")
};

// OR (||)
if (first == 'Coding' || last == 'Coding'){
    console.log('1 or both of these variables is "Coding"')
};

// For Loop in JS
// For Loop Syntax -- for(counter; condition; incrementer/decrementer)
// ++ shorthand for +=1

let countByOne = () =>{
    //For Loop
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'The counting has stopped!'
};

console.log(countByOne())

// stepping backward or decreasing withing a for loop
let decreaseByOne = () =>{
    //For Loop
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'The counting has stopped!'
};

console.log(decreaseByOne())

// While Loop - JavaScript
// formatted string uses backticks `` and ${} for javascript variables

let countWithWhile = () =>{
    let i = 0; // Counter
    let text = '';

    while(i < 10){
        text += `This number is... ${i} \n`
        i++
    }
    return text
}

console.log(countWithWhile())

// Do-While loop in JS
// Main difference is that condition in do-while is checked AFTER the 'do' block
// Standard while loops check condition before doing anything

let countWithDoWhile = () => {
    let i = 10; // Counter
    let text = '';

    //Do 
    do{
        text += `This new number is... ${i} \n`
        i++
    }while(i < 10)
    return text
};

console.log(countWithDoWhile())


/* 
    JS Arrays: Looping, methods, Array String methods
*/

// Creating a new array

let group_of_names = ['Terry', 'Ben', 'Ash', 'Brock', 'Misty'];

// Grabbing a value by index
console.log(group_of_names[0])

// Array Deconstruction
let name1, name2, name3;
// let name1;
// let name2;
// let name3;

[name1, name2, name3] = group_of_names
// name1 = group_of_names[0]
// name2 = group_of_names[1]
// name3 = group_of_names[2]
console.log(name1, name2, name3)


// Looping over an Array

// Method #1 - most common for looping through arrays
let showNames = (a_list) =>{
    for(let i = 0; i < a_list.length; i++){
        console.log(a_list[i])
    }
    return 'Done!'
};
console.log(showNames(group_of_names))

//Python Equivalent 
// for i in range(len(group_of_names)):
//     print(group_of_names[i])

// Method #2 for looping with forEach()
group_of_names.forEach(
    (name) => {
        console.log(name)
    }
);

// Python equivalent
// for name in group_of_names:
//     print(name)

// JS Array Method Array.toString()
console.log(group_of_names.toString())
// typecheck -- gives the data type of an object
console.log(typeof(group_of_names.toString()))

// JS Array Methods: .map(), .filter(), .reduce()
group_of_names = ['Terry', 'Ben', 'Ash', 'Brock', 'Misty'];

// .map()
let b_names = group_of_names.map( name => {
    if (name[0] == 'B'){
        return name
    }else{
        return 'not a B name'
    }
});
console.log(b_names)

// long form of map (good visualization for what happens in the code above)
let b_names_2 = () =>{
    let new_array = [];
    for(let i = 0; i < group_of_names.length; i++){
        if(group_of_names[i][0] == 'B'){
            new_array.push(group_of_names[i])
        }else{
            new_array.push('Not a B Name')
        }
    }
    return new_array
};
console.log(b_names_2())

//.reduce()
const nums = [2,4,6,8,10]
let nums_reduce = nums.reduce((accumulator, current_num) =>{
    return accumulator + current_num
});
console.log(nums_reduce)

// Easier way to visualize or get the same solution
let counter = 0;
for(let i = 0; i < nums.length; i++){
    counter += nums[i]
}
console.log(counter)

// .filter()
let b_names_3 = group_of_names.filter( name => {
    return name[0] =='B'
});

console.log(b_names_3)

// Array methods with string values: .join(), .slice, .splice()
console.log(group_of_names.join(", "))

console.log(group_of_names.slice(0,3)) // group_of_names[0:3]

// .splice()
let captured_value = group_of_names.splice(0,1, 'Freddie');
console.log(`This value was removed from the array: ${captured_value}`)
console.log(group_of_names)


// using .search along with .slice for list items that are strings
console.log(group_of_names[0].search('F'))

// String.slice
console.log(group_of_names[0].slice(0,3))


