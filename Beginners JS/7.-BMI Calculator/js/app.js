import { 
    decreaseAge, 
    increaseAge, 
    increaseWeight, 
    decreaseWeight, 
    displayAge, 
    displayWeight, 
    myRange, 
    rangeValue,
    btnCalculate,
    bmiResult,
    bmiClasification,
    bmiRange,
    bmiPI
} from './selectors.js';

let age = 22;
let weightValue = 70;

const onIncreaseCounter = ( reference ) => {
    if(reference.id !== 'weight'){
        age++;
        reference.value = age;
    } else {
        weightValue++;
        reference.value = weightValue;
    }
}

const onDecreaseCounter = ( reference ) => {
    if(reference.id !== 'weight'){
        age--;
        reference.value = age;
    } else {
        weightValue--;
        reference.value = weightValue;
    }
}

const onDisplayBMI = ( result ) => {
    
    const finalValue = parseFloat(result.calculateBMI().toFixed(1));
    const PI = parseFloat(result.calculatePI().toFixed(2));
    let clasification = null;
    
    if (finalValue < 16) {
        clasification = 'Severe Thinness';
        bmiClasification.style.color = '#ff372d';
        bmiRange.textContent = `${ clasification } BMI Range: < 16 kg/m2 `;
    } else if (finalValue >= 16 && finalValue <= 17) {
        clasification = 'Moderate Thinness';
        bmiClasification.style.color = '#ff6159';
        bmiRange.textContent = `${ clasification } BMI Range: 16 kg/m2 - 17 kg/m2`;
    } else if (finalValue >= 17.1 && finalValue <= 18.5) {
        clasification = 'Mild Thinness';
        bmiClasification.style.color = '#ffd900';
        bmiRange.textContent = `${ clasification } BMI Range: 17 kg/m2 - 18.5 kg/m2`;
    } else if (finalValue >= 18.6 && finalValue <= 25) {
        clasification = 'Normal';
        bmiClasification.style.color= '#00cb6f';
        bmiRange.textContent = `${ clasification } BMI Range: 18.5 kg/m2 - 25 kg/m2`;
    } else if (finalValue >= 25.1 && finalValue <= 30) {
        clasification = 'Overweight';
        bmiClasification.style.color= '#ffd900';
        bmiRange.textContent = `${ clasification } BMI Range: 25 kg/m2 - 30 kg/m2`;
    } else if (finalValue >= 30.1 && finalValue <= 35) {
        clasification = 'Obese Class I';
        bmiClasification.style.color = '#ff6159';
        bmiRange.textContent = `${ clasification } BMI Range: 30 kg/m2 - 35 kg/m2`;
    } else if (finalValue >= 35.1 && finalValue <= 40) {
        clasification = 'Obese Class II';
        bmiClasification.style.color = '#ff372d';
        bmiRange.textContent = `${ clasification } BMI Range: 35 kg/m2 - 40 kg/m2`;
    } else if (finalValue > 40.1) {
        clasification = 'Obese Class III';
        bmiClasification.style.color = '#5f0000';
        bmiRange.textContent = `${ clasification } BMI Range: > 40 kg/m2`;

    }

    bmiResult.textContent = isNaN(finalValue) ? 'Letters Detected' : finalValue;
    bmiClasification.textContent = clasification;
    bmiPI.textContent = `Ponderal Index: ${PI} kg/m`;

}

const onCalculateBMI = () => {
    // Calculating BMI Using the Metric System
    // Formula:
    // weight (kg) / [height (m)]2 Or [weight (kg) / height (cm) / height (cm)] x 10,000   

    const bmiOutcome = {
        age,
        height: parseFloat(rangeValue.value),
        weight: parseFloat(weightValue),
        calculateBMI: function (){
            return ((this.weight / this.height / this.height) * 10000);
        },
        calculatePI: function(){
            return (this.weight / Math.pow(this.height / 100, 3));
        }
    }
    onDisplayBMI( bmiOutcome );
}

increaseAge.addEventListener('click', () => {
    onIncreaseCounter(displayAge);
});

decreaseAge.addEventListener('click', () => {
    onDecreaseCounter(displayAge);
});

increaseWeight.addEventListener('click', () => {
    onIncreaseCounter(displayWeight);
});

decreaseWeight.addEventListener('click', () => {
    onDecreaseCounter(displayWeight);
});

displayWeight.addEventListener('input', () => {
    if(isNaN(displayWeight.value)){
        displayWeight.style.color = '#ff372d';
        return;
    } 
    
    weightValue = displayWeight.value;
    displayWeight.style.color = '#1d1d1d';
    
})

btnCalculate.addEventListener('click', onCalculateBMI);

myRange.oninput = (e) => {
    const range =  e.target.value;
    rangeValue.value = range;
}

document.addEventListener('DOMContentLoaded', () => {
    displayAge.value = age;
    displayWeight.value = weightValue;
    onCalculateBMI();
});

