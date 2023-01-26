const car = {
    manufacturer: "Škoda",
    engine: "Petrol",
    horsePower: 150,
    gearbox: "Manual",
    gears: 6,
    color: 'grey',
    seats: 5,
    tyres: "R16",
    tyresType: "Summer", 
    multimedia: "Bolero",
    addToStock: function(price) {
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
        `)
    }
}

function SportCar() {
    this.manufacturer = "Porche";
    this.engine = "Petrol";
    this.horsePower = 240;
    this.gearbox = "Manual";
    this.gears = 7;
    this.color = 'black';
    this.seats = 2;
    this.tyres = "R18";
    this.tyresType = "Summer"; 
    this.multimedia = "Sport Matrix";
    this.spoiler = true;
    this.flaps = true;
    this.raceStripes = "red";
    this.addToStock = function(price) {
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
        `)
    }
}