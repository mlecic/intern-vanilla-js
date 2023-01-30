const car = {
  manufacturer: "Škoda",
  engine: "Petrol",
  horsePower: 150,
  gearbox: "Manual",
  gears: 6,
  color: "grey",
  seats: 5,
  tyres: "R16",
  tyresType: "Summer",
  multimedia: "Bolero",
  addToStock: function (price) {
    this.price = price;
    console.log(`
            ===== New car added to stock =====
            name: ${this.manufacturer} ${this.model}
            engine: ${this.engine},
            engineType: ${this.engineType},
            horsePower: ${this.horsePower},
            gearbox: ${this.gearbox},
            gears: ${this.gears},
            color: ${this.color},
            seats: ${this.seats},
            tyres: ${this.tyres},
            tyresType: ${this.tyresType}, 
            multimedia: ${this.multimedia},
            ----------------------------------
            PRICE: ${this.price} €
            ----------------------------------
        `);
  },
};

function SportCar() {
  this.manufacturer = "Porche";
  this.engine = "Petrol";
  this.horsePower = 240;
  this.gearbox = "Manual";
  this.gears = 7;
  this.color = "black";
  this.seats = 2;
  this.tyres = "R18";
  this.tyresType = "Summer";
  this.multimedia = "Sport Matrix";
  this.spoiler = true;
  this.flaps = true;
  this.raceStripes = "red";
  this.addToStock = function (price) {
    this.price = price;
    console.log(`
            ===== New car added to stock =====
            name: ${this.manufacturer} ${this.model}
            engine: ${this.engine},
            engineType: ${this.engineType},
            horsePower: ${this.horsePower},
            gearbox: ${this.gearbox},
            gears: ${this.gears},
            color: ${this.color},
            seats: ${this.seats},
            tyres: ${this.tyres},
            tyresType: ${this.tyresType}, 
            multimedia: ${this.multimedia},
            spoiler: ${this.spoiler},
            this.flaps: ${this.flaps},
            this.raceStripes: ${this.raceStripes}
            ----------------------------------
            PRICE: ${this.price} €
            ----------------------------------
        `);
  };
}

const car1 = Object.assign(car, {
  model: { value: "Octavia" },
  engineType: { value: "1.5 TSI" },
});

// car1.addToStock(21000);

const car2 = Object.assign(car, {
  model: "Octavia",
  engineType: "2.0 TDI",
  color: "Artic White",
  engine: "Diesel",
  tyres: "R17",
  tyresType: "Winter",
});

// car2.addToStock(24999);

let car3 = new SportCar();

car3 = Object.assign(car3, {
  model: "Macan",
  engineType: "3.0 Twin Turbo",
  leather: true,
  carbonDetails: true,
  sportWheel: true,
  sportMode: "yes",
  color: "True Black",
  tyres: "R18",
  tyresType: "Winter",
  flaps: false,
});

// car3.addToStock(80000);

const printSalesSpecs = (enteredCar) => {
  Object.defineProperty(enteredCar, "tyres", {
    enumerable: false,
  });
  Object.defineProperty(enteredCar, "tyresType", {
    enumerable: false,
  });
  Object.defineProperty(enteredCar, "addToStock", {
    enumerable: false,
  });

  for (let car in enteredCar) {
    console.log(`${car}: ${enteredCar[car]}`);
  }
};

// console.log("-----------------------------------------");
// printSalesSpecs(car1);
// console.log("-----------------------------------------");
// printSalesSpecs(car2);
// console.log("-----------------------------------------");
// printSalesSpecs(car3);
// console.log("-----------------------------------------");

function deleteSpec(enteredCar, property) {
  if (!enteredCar.hasOwnProperty(property)) {
    console.log("Property does not exist!");
  }

  delete enteredCar[property];
}

function removeSpec(enteredCar, property) {
  if (!enteredCar.hasOwnProperty(property)) {
    console.log("Property does not exist!");
  }

  const copyObj = { ...enteredCar };

  delete copyObj[property];

  return copyObj;
}
