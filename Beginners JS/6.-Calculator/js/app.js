const keyboard = document.querySelector('.calculator-keyboard');

const calculator = {
    displayValue: '0',
    firstOperand: null,
    operator: null,
    waitingASecondOperator: false
}

const handleInput = ( number ) => {

    const { waitingASecondOperator, displayValue } = calculator;

    if(!waitingASecondOperator){
        calculator.displayValue = displayValue === '0' ? number : displayValue + number;
    } else {
        calculator.displayValue = number;
        calculator.waitingASecondOperator = false;
    }

}

const calculate = ( firstOperand, secondOperand, operator) => {
    if(operator === '+'){
        return firstOperand + secondOperand;
    } else if(operator === '-'){
        return firstOperand - secondOperand;
    } else if( operator === '*'){
        return firstOperand * secondOperand;
    } else if( operator === '/'){
        return firstOperand / secondOperand;
    }

    return secondOperand;
}

const handleOperator = ( nextOperator ) => {
    const { waitingASecondOperator, operator, displayValue, firstOperand } = calculator;

    const inputValue = parseFloat( displayValue );

    if(operator && waitingASecondOperator){
        calculator.operator = nextOperator;
        return;
    }

    if( firstOperand === null && !isNaN(inputValue)){
        calculator.firstOperand = inputValue;
    } else if ( operator ){
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = parseFloat(result.toFixed(2));
        calculator.firstOperand = result;
        
    }

    calculator.waitingASecondOperator = true;
    calculator.operator = nextOperator;

}

const handleUpdate = () => {
    const realValue = document.querySelector('.real-value');
    realValue.value = calculator.displayValue;
}

const handleDot = (dot) => {

    if(calculator.waitingASecondOperator){
        calculator.displayValue = '0.';
        calculator.waitingASecondOperator = false;
        return;
    }
    
    if(!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

const handleClearAll = () => {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.operator = null;
    calculator.waitingASecondOperator = false;
}

keyboard.addEventListener('click', (event) => {
    const { target } = event;
    const { value } = target;
    if(!target.matches('button')) return;
    
    switch(value){
        case '/':
        case '*':
        case '+':
        case '-':
        case '=':
            handleOperator(value);
            break;
        case '.':
            handleDot(value);
            break;
        case 'ac':
            handleClearAll();
            break;
        default:
            Number.isInteger(parseFloat(value)) && handleInput(value);
    }

    handleUpdate()

})

