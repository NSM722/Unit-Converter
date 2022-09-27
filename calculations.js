export const lengthCard = document.getElementById('length');
export const volumeCard = document.getElementById('volume');
export const massCard = document.getElementById('mass');
export const inputElement = document.getElementById('metric-input');


// Calculating length
export function getLength() {
  // Converting the string input value to a number
  let metricValue = Number.parseInt(inputElement.value, 10);
  let metersToFeet = metricValue * 3.281;
  let feetToMeters = metricValue / 3.281;
  return lengthCard.innerHTML += (`<p>
      ${metricValue} meters = ${metersToFeet.toFixed(3)} feet |
      ${metricValue} feet = ${feetToMeters.toFixed(3)} meters
  </p>`)
}

// Calculating volume
export function getVolume() {
  // Converting the string input value to a number
  let metricValue = Number.parseInt(inputElement.value, 10);
  let litersToGallons = metricValue * 0.264;
  let gallonsToLiters = metricValue / 0.264;
  return volumeCard.innerHTML += (`<p>
      ${metricValue} liters = ${litersToGallons.toFixed(3)} gallons |
      ${metricValue} gallons = ${gallonsToLiters.toFixed(3)} liters
  </p>`)
}

// Calculating mass
export function getMass() {
  // Converting the string input value to a number
  let metricValue = Number.parseInt(inputElement.value);
  let kilosToPounds = metricValue * 2.204;
  let poundsToKilos = metricValue / 2.204;
  return massCard.innerHTML += (`<p>
      ${metricValue} kilos = ${kilosToPounds.toFixed(3)} pounds |
      ${metricValue} pounds = ${poundsToKilos.toFixed(3)} kilos
  </p>`)
}

// Function to clear all inputs after reset button is clicked
export function clearElements () {
  lengthCard.textContent = "Length (Meter/Feet)";
  volumeCard.textContent = "Volume (Liters/Gallons)";
  massCard.textContent = "Mass (Kilograms/Pounds)";
  inputElement.value = "";
}