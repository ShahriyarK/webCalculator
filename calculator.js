const buttons = document.querySelectorAll(".btn");
const specialButtons = document.querySelectorAll(".btn-sp");
let buttonString = "";
let numArray=[];
let result = 0;

for(let button of buttons) {
    button.addEventListener('click',() => {
        let buttonValue = button.innerHTML;
        buttonString += buttonValue;
        // console.log(buttonString);
        document.getElementById('display').textContent = buttonString;

        if (buttonString.includes("+") && buttonValue !== '+') {
            numArray = buttonString.split('+');
            result = sumOf(numArray);
        }
        else if (buttonString.includes("x") && buttonValue !== 'x') {
            numArray = buttonString.split('x');
            result = productOf(numArray);
        }
        else if (buttonString.includes("÷") && buttonValue !== '÷') {
            numArray = buttonString.split('÷');
            result = divisionOf(numArray);
        }
        else if (buttonString.includes("-") && buttonValue !== '-') {
            numArray = buttonString.split('-');
            result = differenceOf(numArray);
            console.log(result);
        }
    })
}

for (let button of specialButtons) {
    button.addEventListener('click', () =>{
        let buttonValue = button.innerHTML;
        if (buttonValue === '=') {
            document.getElementById('display').textContent = result.toString();
        }
        if (buttonValue === 'C') {
            document.getElementById('display').textContent = "0";
            buttonString = "";
        }
    })
}



function sumOf(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += Number(array[i]);
    }
    return sum;
}

function productOf(array) {
    let prod = 1;
    for (i = 0; i < array.length; i++) {
        prod *= Number(array[i]);
    }
    return prod;
}

function differenceOf(array) {
    let diff = Number(array[0]);
    for (i = 1; i < array.length; i++) {
        diff = diff - Number(array[i]);
    }
    return diff;
}

function divisionOf(array) {
    let div = Number(array[0]);
    for (i = 1; i < array.length; i++) {
        div = div / Number(array[i]);
    }
    return div;
}
