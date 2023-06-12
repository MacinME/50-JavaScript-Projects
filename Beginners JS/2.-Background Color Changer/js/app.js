// Variables
const button = document.querySelector('#main-button');
const body = document.querySelector('body');

const hexaCode = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// Generate a random number
const onRandomNumber = () => {
    return Math.floor( Math.random() * hexaCode.length);
}   

// Set the property background
const onChangeColor = () => {

    let hexaColor = '#'

    for (let i = 0; i < 6; i++) {
        hexaColor += hexaCode[onRandomNumber()];
    }

    // Set the styles
    body.style.backgroundColor = hexaColor;
    button.textContent = hexaColor;
}   

button.addEventListener('click', onChangeColor);

