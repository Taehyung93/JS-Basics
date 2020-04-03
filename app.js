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

function runApp() {
  debugger;
  const firstName = "Filip";
  const lastName = "Jerga";

  const firstName2 = "John";
  const lastName2 = "Green";

  function sayHello(name, lname) {
    console.log("Hello " + name + " " + lname);
  }

  sayHello(firstName, lastName);
  sayHello(firstName2, lastName2);
  sayHello("Martha", "Doppler");
}

runApp();
