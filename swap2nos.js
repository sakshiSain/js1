/* Swap two numbers without using 3rd variable */ 

let a = 7;
let b = 3;
console.log(`Before swap a= ${a}, b = ${b}`);

a= a+b;
b=a-b;
a=a-b;

console.log(`After swap a=${a}, b = ${b}`);