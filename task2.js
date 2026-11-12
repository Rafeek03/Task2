
let a = 20;
let b = 10;

a += b;
console.log("Addition:", a); // 30

a = 20;
a -= b;
console.log("Subtraction:", a); // 10

a = 20;
a *= b;
console.log("Multiplication:", a); // 200

a = 20;
a /= b;
console.log("Division:", a); // 2

a = 20;
a **= b;
console.log("Exponent:", a); // 10240000000000

a = 20;
a %= b;
console.log("Modulus:", a); // 0


console.log(25 > 15);  // true


console.log(50 == "50");  // true
console.log(50 === "50");  // false




console.log(100 != 200);   // true
console.log(100 !== 200);  // true


let age = 20;  // true

console.log(age >= 18);  // true


console.log(10 > 20 || 50 > 30);    // true


console.log(!(100 > 50));  // false



let age2 = 25;

console.log(age2 > 18 && age2 < 30 && age2 != 20); // true


let age3 = 25;
let isStudent = true;

console.log(age3 > 18 && isStudent || !(age3 < 18));  // true



let num = -10;

let result1 = num >= 0 ? "Positive" : "Negative";

console.log(result1);// Negative


let isLoggedIn = true;

let result2 = isLoggedIn ? "Welcome" : "Please Login";

console.log(result2);// Welcome


let firstName = "Mohamed";
let lastName = "Rafeek";

let fullName = firstName + " " + lastName;

console.log(fullName);  // Mohamed Rafeek


let name = "Mohamed";
let age4 = 24;
let city = "Bengaluru";

console.log(`My name is ${name}, I am ${age4} years old, and I live in ${city}.`);// My name is Mohamed, I am 24 years old, and I live in Bengaluru.


console.log(typeof ("JavaScript" + 100)); // string


console.log(typeof (100 + true));  // number



let num1 = Number("250");

console.log(num1 + 50);// 300


console.log(Number("123")); // 123
console.log(Number("abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0


console.log(Boolean(""));  // false
console.log(Boolean("Hello")); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false


let price = "500";

let finalPrice = Number(price) + 100;

console.log(finalPrice); // 600