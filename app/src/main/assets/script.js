function submitForm() {

    let mileage = document.getElementById("mileage").value;
    let fuel = document.getElementById("fuel").value;
    let price = document.getElementById("price").value;

    if (!(/^\d+$/.test(mileage) && /^\d+(\.\d+)?$/.test(fuel) && /^\d+(\.\d+)?$/.test(price)))  {
        console.log("Data nebyla ulozena, zkontrolujte, ze desetiny jsou oddeleny teckou (u najedzu lze zadavat pouze cela cisla)");
        return false;
    } // validuje vstup

    if (localStorage.getItem("moje_auto_data")) {
        var storedData = JSON.parse(localStorage.getItem("moje_auto_data"));
    } else {
        var storedData = {};
    } // Kontroluje, zda existuje moje_auto_data. Pokud ne, tak vytvori novy objekt.
    
    // mileage
    if (storedData.mileage >= mileage ) {
        console.log("Data nebyla ulozena, vas aktualni najez nemuze byt mensi, nez naposledy zaznamenany :/");
        return false; // validuje
    } else if (storedData.mileage) {
        storedData.mileage = mileage;
    } else {
        storedData.mileage = mileage;
    }
    
    // fuel
    if (storedData.fuel) {
        let newFuel = parseInt(storedData.fuel) + parseInt(fuel);
        
        storedData.fuel = newFuel;
    } else {
        storedData.fuel = fuel;
    }
    
    // price
    if (storedData.price) {
        let newPrice = parseInt(storedData.price) + parseInt(price);
        
        storedData.price = newPrice;
    } else {
        storedData.price = price;
    }
    
    localStorage.setItem("moje_auto_data", JSON.stringify(storedData));

    console.log("Data byla ulozena");
}

function submitSets() {
    let carName = document.getElementById("carName").value

    if (localStorage.getItem("moje_auto_data")) {
        var storedData = JSON.parse(localStorage.getItem("moje_auto_data"));
    } else {
        var storedData = {};
    } // Kontroluje, zda existuje moje_auto_data. Pokud ne, tak vytvori novy objekt.
    

    // carName
    storedData.carName = carName;

    localStorage.setItem("moje_auto_data", JSON.stringify(storedData));
}

function displayData() {

    let storedData = JSON.parse(localStorage.getItem("moje_auto_data")); // nacte ulozena data

    // Zobrazeni dat na strance
    if (storedData) {

        let yourAvg = (storedData.fuel / (storedData.mileage / 100)).toFixed(2); //Vypocet avg sptreby
        document.getElementById("yourAvg").innerHTML = yourAvg;

        document.getElementById("totalPrice").innerHTML = storedData.price;
        document.getElementById("totalMileage").innerHTML = storedData.mileage;

        document.getElementById("yourCar").innerHTML = storedData.carName;

    } else {
        console.log("Nejsou k dispozici zadna ulozena data.");
    } 
}

function clearData() {
    localStorage.removeItem("moje_auto_data");
    console.log("Data byla smazana");
}