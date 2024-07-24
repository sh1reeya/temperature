function convertTemperature() {
    const inputTemp = document.getElementById("inputTemperature").value;
    const inputUnit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById("result");

    if (isNaN(inputTemp) || inputTemp === "") {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    const temp = parseFloat(inputTemp);
    let convertedTemp;

    if (inputUnit === "Celsius") {
        convertedTemp = temp; // already in Celsius
    } else if (inputUnit === "Fahrenheit") {
        convertedTemp = (temp - 32) * 5 / 9; // convert to Celsius
    } else {
        resultDiv.textContent = "Invalid unit selected.";
        return;
    }

    resultDiv.textContent = `${temp} ${inputUnit} is equal to ${convertedTemp.toFixed(2)} Celsius`;
}
