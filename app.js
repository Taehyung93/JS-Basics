//VARIABLES
// debugger;
// let isEmployed = true;
// let hasApartment = false; //Boolean

//String
// let age = 29; //Number

// let birthday; //undefined

// let phone = null; //Null

// let fullName = "Filip Jerga";

// fullName = "John Green";

// console.log(fullName);

// console.log("Name: " + firstName + " " + lastName + " age: " + age);

// console.log(birthday);

// console.log(phone);

//var
// function scope
// undefined in case i am accesing variable before declaration

//let
//block scope
//ReferenceError in case i am accesing variable before declaration

//const
//block
//ReferenceError in case i am accessing variable before declaration
//const assign value only once

let scope = "SCOPE!!!!";

function hello() {
  console.log("Hello World");
}

//Hoisting
function runApp() {
  console.log(firstName);
  const firstName = "Filip";
  const lastName = "Jerga";

  const firstName2 = "John";
  const lastName2 = "Green";

  if (true) {
    var fScope = "Function Scope!";
    let bScope = "Block Scope";
  }

  console.log(fScope);
  function sayHello(name, lname) {
    console.log("hello" + name + " " + lname);
  }

  sayHello(firstName, lastName);
  sayHello(firstName2, lastName2);
  sayHello("Martha", "Doppler");
}

runApp();
