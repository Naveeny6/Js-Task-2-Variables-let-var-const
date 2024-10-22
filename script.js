
// Using var

var num1 = 10;
var num2 = 5;
var addition = num1 + num2;       // Addition
var subtraction = num1 - num2;    // Subtraction
var multiplication = num1 * num2; // Multiplication
var ratio = num1 / num2;          // Ratio

console.log("\nUsing var:");
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Ratio:", ratio);



// Using let


let num3 = 20;
let num4 = 4;
let additionLet = num3 + num4;
let subtractionLet = num3 - num4;
let multiplicationLet = num3 * num4;
let ratioLet = num3 / num4;

console.log("\nUsing let:");
console.log("Addition:", additionLet);
console.log("Subtraction:", subtractionLet);
console.log("Multiplication:", multiplicationLet);
console.log("Ratio:", ratioLet);

// Using const
const num5 = 15;
const num6 = 3;
const additionConst = num5 + num6;
const subtractionConst = num5 - num6;
const multiplicationConst = num5 * num6;
const ratioConst = num5 / num6;

console.log("\nUsing const:");
console.log("Addition:", additionConst);
console.log("Subtraction:", subtractionConst);
console.log("Multiplication:", multiplicationConst);
console.log("Ratio:", ratioConst);


// Var before declaration

// console.log(nav) // shows "not defined" when nav variable is not defined anywhere. 

console.log("\nVar before declaration:",a) // undefined 
var a = 20;



// let before declaration

console.log("\nlet before decleration:")
console.log("let before declaration;",b) //caught ReferenceError: Cannot access 'b' before initialization
let b = 20;

// const before declaration

console.log("const before declaration:",c) //Uncaught ReferenceError: Cannot access 'c' before initialization
const c = 20;

