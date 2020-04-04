//Hoisting
function runApp() {
  var firstName = "Filip";
  const lastName = "Jerga";

  const car = {
    brand: "mercedes",
    type: "benz",
    produceYear: 1995,
    displayInfo: function() {
      console.log(`${this.brand} ${this.type} - ${this.produceYear}`);
    }
  };

 

  const car2 = {
    brand: "mitshubishi",
    type: "lancer",
    produceYear: 2002
  };

  const firstName2 = "John";
  const lastName2 = "Green";

  //display car Info
  //params: brand, type, year
  function displayCarInfo(car) {
    console.log(`${car.brand} - ${car.type} - ${car.produceYear}`);
  }

  car.displayInfo(car);
}

runApp();
