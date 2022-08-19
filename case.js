// document.getElementById('btn-case-plus').addEventListener('click', function () {
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previouscaseNumber = parseInt(caseNumberString);
//     const newCaseNumber = previouscaseNumber + 1;
//     caseNumberField.value = newCaseNumber;
    
// })

// document.getElementById('btn-case-plus').addEventListener('click', function () {
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previouscaseNumber = parseInt(caseNumberString);
//     const newCaseNumber = previouscaseNumber - 1;
//     caseNumberField.value = newCaseNumber;
    
// })


function updateCaseNumber(isIncrease) {
    const caseNumberField= document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previouscaseNumber = parseInt(caseNumberString);


    let newCaseNumber;
    if (isIncrease===true) {
        newCaseNumber = previouscaseNumber + 1;
    }
    else {
        newCaseNumber = previouscaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function updateCasePrice(newCaseNumber) {
    
    const totalCasePrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = totalCasePrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCasePrice(newCaseNumber);
    calculateSubTotal();
   
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
  const newCaseNumber = updateCaseNumber(false);
    updateCasePrice(newCaseNumber);
    calculateSubTotal();
})