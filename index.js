import { getLength, getVolume, getMass, clearElements } from "./calculations.js";

const convertButton = document.getElementById('converter-btn');
const resetButton = document.getElementById('reset-btn');

// Event to enable the conversion
convertButton.addEventListener('click', function () {
    getLength();
    getVolume();
    getMass();
});

// Event to empty/clear the elements
resetButton.addEventListener('click', function() {
    clearElements();
});




