function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

let number = null;
let other_number = null;
let operator = null;
let previousOperator = null;
let previousOperatorIndex = null;


function operate(operator,a,b){
    if(operator === '+'){
        return add(a,b);
    }else if(operator === '-'){
        return subtract(a,b);
    }else if(operator === 'x'){
        return multiply(a,b);
    }else if(operator === '÷'){
        return divide(a,b);
    }
}

const display = document.querySelector("p");
display.innerText = "";


const numberBtns = document.querySelectorAll(".value");
numberBtns.forEach(function(button){
    button.addEventListener('click', event => {
        display.append(button.value);
    });
});


const operatorBtns = document.querySelectorAll(".operator-buttons .value");
operatorBtns.forEach(function(button){
    button.addEventListener('click', event => {
        operator = button.value;
        let displayText;
        let operatorIndex;
        // If number is null, assign the first number to the number variable
        if(number === null){
            displayText = display.innerText;
            operatorIndex = displayText.indexOf(operator);
            number = parseInt(displayText.slice(0,operatorIndex));
            previousOperator = operator;
            previousOperatorIndex = operatorIndex;
            console.log(`previousOperatorIndex: ${previousOperatorIndex}`)
            console.log(`operatorIndex: ${operatorIndex}`)
        } else if(number !==null && other_number === null){
            displayText = display.innerText;
            operatorIndex = displayText.indexOf(operator);
            console.log(`previousOperatorIndex: ${previousOperatorIndex}`)
            console.log(`operatorIndex: ${operatorIndex}`)
            other_number = parseInt(displayText.slice(previousOperatorIndex+1,operatorIndex));
            number = operate(previousOperator, number, other_number);
            display.innerText = number + operator;
            other_number = null;
            previousOperator = null;
        }
    });
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener('click', event => {
    display.innerText = "";
    number = null;
    other_number = null;
    operator = null;
    operatorIndex = null;
    previousOperator = null;
    previousOperatorIndex = null;
})

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener('click', event => {
    display.append(equalBtn.value);
    let displayText = display.innerText;
    let operatorIndex = displayText.indexOf(operator);
    let equalIndex = displayText.indexOf(equalBtn.value);
    other_number = parseInt(displayText.slice(operatorIndex+1,equalIndex));
    number = operate(operator, number, other_number);
    display.innerText = number;
    number = null;
    other_number = null;
    operator = null;
});

