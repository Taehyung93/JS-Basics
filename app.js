const Car = require("./Car");

function runApp() {
  const car = new Car("mercedes", "benz", 1995);
  const car2 = new Car("mitshubishi", "lancer", 2002);

  car.displayInfo();
  car2.displayInfo();

  console.log(Car.prototype === car.__proto__);
  console.log(Car.prototype === car2.__proto__);
}

runApp();
