const counter = document.querySelector('.counter');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const reset = document.querySelector('#reset');

let defaultValue = 0;

document.addEventListener('DOMContentLoaded', () => {
    counter.textContent = defaultValue;
});

plus.addEventListener('click', onIncrease);
minus.addEventListener('click', onDecrease);
reset.addEventListener('click', onReset);

function onIncrease(){
    defaultValue++
    counter.textContent = defaultValue;
}

function onDecrease(){
    defaultValue--
    counter.textContent = defaultValue;
}

function onReset(){
    defaultValue = 0
    counter.textContent = defaultValue;
}