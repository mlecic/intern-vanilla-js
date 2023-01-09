// CONSTANTS
// FIX pickRandomCarBrand, GET A RANDOM CAR MODEL!
const VOLVO = "Volvo";
const VW = "VW";
const TOYOTA = "Toyota";
const FIAT = "Fiat";
const FORD = "Ford";
const JAGUAR = "Jaguar";
const BMW = "BMW";
const MERCEDES = "Mercedes";
const PORSCHE = "Porsche";
const HONDA = "Honda";

const i = 9;

// This function should log randomly selected brand
function pickRandomCarBrand() {
  var carBrands;
  carBrands = [
    VOLVO,
    VW,
    TOYOTA,
    FIAT,
    FORD,
    JAGUAR,
    BMW,
    MERCEDES,
    PORSCHE,
    HONDA,
  ];

  var randomNumber;
  function generateRandomNumber() {
    randomNumber = Math.round(Math.random() * i);
  }
  generateRandomNumber();

  console.log(`Available car brands: ${carBrands}`);
  console.log(`Generated random number: ${randomNumber}`);
  console.log(`Picked Car Brand: ${carBrands[randomNumber]}`);
}

pickRandomCarBrand();
