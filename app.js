class Car {
  brand = "";
  type = "";
  produceYear = null;

  constructor(brand, type, produceYear)

  displayInfo() {
    console.log(`${this.brand} ${this.type} - ${this.produceYear}`);
  }
}

function runApp() {
  const car = new Car();

//   car.brand = "mercedes";
//   car.type = "benz";
//   car.produceYear = 1995;

  const car2 = {
    brand: "mitshubishi",
    type: "lancer",
    produceYear: 2002,
    displayInfo: function() {
      console.log(`${this.brand} ${this.type} - ${this.produceYear}`);
    }
  };
  car.displayInfo();
  car2.displayInfo();
}

runApp();
