/*function submitForm() {

    let mileage = document.getElementById("mileage").value;
    let fuel = document.getElementById("fuel").value;
    let totalPrice = document.getElementById("total_price").value;


    // Převádí data na objekt
    let data = {
        mileage: mileage,
        fuel: fuel,
        totalPrice: totalPrice
    }

    // Ukládá data do localStorage
    localStorage.setItem("refuelingData", JSON.stringify(data));

    console.log("Data byla uložena");
}

// Vyzobrazení dat


let data = JSON.parse(localStorage.getItem("refuelingData"));
console.log(data.mileage);*/

function submitForm() {

    let mileage = document.getElementById("mileage").value;
    let fuel = document.getElementById("fuel").value;
    let price = document.getElementById("price").value;

    let storedData = JSON.parse(localStorage.getItem("refuelingData")); // Nacte ulozena data

    // pokud nejsou data nalezena, vytvori se novy objekt
    if (!storedData) {
        storedData = {};
    }

    // pricte nove hodnoty
    storedData.mileage = storedData.mileage ? storedData.mileage + mileage : mileage;
    storedData.fuel = storedData.fuel ? storedData.fuel + fuel : fuel;
    storedData.proce = storedData.price ? storedData.price + price : price;

    localStorage.setItem("refuelingData", JSON.stringify(storedData)); // uklada data do localStorage

    console.log("Data byla ulozena");
}

function displayData() {

    let storedData = JSON.parse(localStorage.getItem("refuelingData")); // nacte ulozena data

    // Zobrazeni dat na strance
    if (storedData) {

        
        let yourAvg = storedData.fuel / (storedData.mileage / 100); //Vypocet avg sptreby
        document.getElementById("yourAvg").innerHTML = yourAvg;

        document.getElementById("totalPrice").innerHTML = storedData.price;
        document.getElementById("totalMileage").innerHTML = storedData.mileage;

    } else {
        console.log("Nejsou k dispozici zadna ulozena data.");
    }
}

/*localStorage.removeItem("refuelingData");
console.log("Data byla smazana");*/