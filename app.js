//Hoisting
function runApp() {
  var firstName = "Filip";
  const lastName = "Jerga";

  const brand = "mercedes";
  const type = "benz";
  const produceYear = 1995;

  const brand2 = "hyundai";
  const type2 = "sonata";
  const produceYear2 = 1987;

  const brand3 = "ferrari";
  const type3 = "unknown";
  const produceYear3 = 1970;

  const brand4 = "mitshubishi";
  const type4 = "lancer";
  const produceYear4 = 2002;

  const firstName2 = "John";
  const lastName2 = "Green";

  //display car Info
  //params: brand, type, year
  function displayCarInfo(brand, type, year) {
    console.log(`${brand} - ${type} - ${year}`);
  }

  displayCarInfo(brand, type, produceYear);
  displayCarInfo(brand2, type2, produceYear2);
  displayCarInfo(brand3, type3, produceYear3);
  displayCarInfo(brand4, type4, produceYear4);
}

runApp();
