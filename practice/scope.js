
// CONSTANTS
{
    const VOLVO = 'Volvo';
    const VW = 'VW';
    const TOYOTA = 'Toyota';
    const FIAT = 'Fiat';
    const FORD = 'Ford';
    const JAGUAR = 'Jaguar';
    const BMW = 'BMW';
    const MERCEDES = 'Mercedes';
    const PORSCHE = 'Porsche'
    const HONDA = 'Honda';
}

const i = 9;

// This function should log randomly selected brand
function pickRandomCarBrand() {
    console.log(`Available car brands: ${carBrands}`);
    console.log(`Generated random number: ${randomNumber}`);
    function generateRandomNumber() {
        var randomNumber;
        randomNumber = Math.round(Math.random() * i);
    }
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
        HONDA
    ];
    console.log(`Picked Car Brand: ${carBrands[randomNumber]}`);
    generateRandomNumber();
}

pickRandomCarBrand();



