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
let scope = "SCOPE!!!!";

function hello() {
  console.log("Hello World");
}

function runApp() {
  debugger;
  hello();
  const firstName = "Filip";
  const lastName = "Jerga";

  const firstName2 = "John";
  const lastName2 = "Green";

  function sayHello(name, lname) {
    const firstName3 = "현제";
    hello();
    console.log(firstName3);
  }

  sayHello(firstName, lastName);
  sayHello(firstName2, lastName2);
  sayHello("Martha", "Doppler");
}

runApp();
