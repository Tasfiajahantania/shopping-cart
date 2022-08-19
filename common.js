function getTextElementById(elementId) {
    
    // calculate total

    const phnTotalElement = document.getElementById(elementId);
    const currentPhnTotalString = phnTotalElement.innerText;
    const currentPhnTotal = parseInt(currentPhnTotalString);
    return currentPhnTotal;
}

function setTextElementById(elementId,value) {
      const subTotalElement = document.getElementById(elementId);
        subTotalElement.innerText = value;
}

function calculateSubTotal() {
     const currentPhnTotal = getTextElementById('phn-total');
    const currentcaseTotal = getTextElementById('case-total');

    const subTotalPrice = currentPhnTotal + currentcaseTotal;
    setTextElementById('sub-total', subTotalPrice);

  // calculate text amount
    const textAmountString = (subTotalPrice * 0.1).toFixed(2);
    const textAmount = parseFloat(textAmountString);
    setTextElementById('text-amout', textAmount);

    const fainalAmount = subTotalPrice + textAmount;
    setTextElementById('final-total', fainalAmount);
}



