const inputOriginalAmount = document.getElementById('originalAmount');
const inputTaxRate = document.getElementById('taxRate');
const pTaxRate = document.getElementById('taxRateDisplay');
const btnCalculate = document.getElementById('btnCalculate');
const inputWithTax = document.getElementById('withTax');

function updateTaxRate(){
    const taxRateValue = inputTaxRate.value;
    pTaxRate.innerText = `${taxRateValue}%`;
}

document.onload = updateTaxRate();

inputTaxRate.addEventListener("input", updateTaxRate);

btnCalculate.addEventListener('click', (e) => {
    e.preventDefault();

    const originalAmount = inputOriginalAmount.value;
    const taxRate = inputTaxRate.value;

    const percentTaxRate = parseFloat(taxRate)
    const decimalIncrease = 1 + (percentTaxRate / 100.0);

    const floatOriginalAmount = parseFloat(originalAmount);

    if(isNaN(floatOriginalAmount)){
        window.alert(`${originalAmount} cannot be cast as a floating point number.`);
        inputOriginalAmount.value = '';
        inputOriginalAmount.focus();
        return;
    }

    const withTax = floatOriginalAmount * decimalIncrease;

    inputWithTax.value = withTax;
});


