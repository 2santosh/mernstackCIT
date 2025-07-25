// WAP to Even or odd
// const num = 20;
// if (num % 2 === 0) {
//     console.log(num + " is Even.");
//   } else {
//     console.log(num + " is Odd.");
//   }

// for (let num = 20; num >= 10; num--) {
//     console.log(num);
// }

// function add(a, b) {
//     return a + b;
// }
// let result = add(10, 20);
// console.log("Sum is: " + result);

// let add = function(a,b){return a + b;};
// console.log("Sum is: " + add(10, 20));

// callBack Function
// function callBackFunction(a,b){
//     console.log("Sum is: " + add(a, b));
// }
// callBackFunction(10, 20);

let greet = (name, parameterName) => {
    return parameterName(name);
};

let paramerterName = (name) => {
    return `Hello, ${name}, welcome!`; 
};

let result = greet("Santosh", paramerterName);
console.log(result);


// let fName = "Santosh";
// let lName = "Adhikari";
// console.log("My name is:"+ fName + " " + lName);
// console.log(`My name is: ${fName} ${lName}`); //string literal

// Synchronous/ Asynchronous function

