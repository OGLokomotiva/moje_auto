function submitForm() {

    document.getElementById("form_refueling").submit();

    var mileage = document.getElementById("mileage").value;
    var fuel = document.getElementById("fuel").value;
    var pricePer = document.getElementById("price_per").value;
    var totalPrice = document.getElementById("total_price").value;
    
}

const refData = {
    mileage: mileage,
    fuel: fuel,
    pricePer: pricePer,
    totalPrice: totalPrice
}

const fs = require('fs')