
function updatePhnNumber(isIncrease) {
    const phnNumberField = document.getElementById('phn-number-field');
    const phnNumberString = phnNumberField.value;
    const previousPhnNumber = parseInt(phnNumberString);
    let newPhnNumber;
    if (isIncrease == true) {
        newPhnNumber = previousPhnNumber + 1;
    }
    else {
        newPhnNumber = previousPhnNumber - 1;
    }
    
    phnNumberField.value = newPhnNumber;
    return newPhnNumber;

}

function updatePhnPrice(newPhnNumber) {
    
    const phnTotalPrice = newPhnNumber * 1219;
    const phnTotalElement = document.getElementById('phn-total');
    phnTotalElement.innerText = phnTotalPrice;
}


document.getElementById('btn-phn-plus').addEventListener('click', function () {
    const newPhnNumber = updatePhnNumber(true);
    updatePhnPrice(newPhnNumber);
    calculateSubTotal();
   

})

document.getElementById('btn-phn-minus').addEventListener('click', function () {
      const newPhnNumber = updatePhnNumber(false);
    updatePhnPrice(newPhnNumber);
    calculateSubTotal();
})
