const buttons = document.querySelectorAll(".btn");
// var buttonValue = document.getElementsByClassName(".btn").value;
console.log(buttons);
// const buttonFirst = buttons.item(1);
// console.log(buttonFirst);
let sum = 0;
let prod=1;
let buttonString = "";
let numArray=[];
let quot = numArray;
for(let button of buttons) {
    button.addEventListener('click',() => {
        let buttonValue = button.innerHTML;
        buttonString = buttonString + buttonValue;
        console.log(buttonString);

        if (buttonValue === "C") {
            console.log("if start");
            document.getElementById('display').textContent = "0";
            buttonString = "";
        }

        else {
        console.log(buttonValue);
        document.getElementById('display').textContent = buttonString;}

        if (buttonString.includes("+") && !buttonString.includes("=")) {

            sum = 0;
            console.log(numArray, numArray.length);
            numArray = buttonString.split('+');
            for (let i = 0; i < numArray.length && buttonValue !== '+'; i++) {
                console.log("if 1 start");
                sum += Number(numArray[i]);
                console.log(sum);
            }
        }
        else if (buttonString.includes("=")&& buttonString.includes("+") ) {
            console.log("result if")
            console.log(sum);
            document.getElementById('display').textContent = sum.toString();

        }

        if (buttonString.includes("x") && !buttonString.includes("=")) {

            prod = 1;
            console.log(numArray, numArray.length);
            numArray = buttonString.split('x');
            for (let i = 0; i < numArray.length && buttonValue !== 'x'; i++) {
                console.log("if 1 start");
                prod *= Number(numArray[i]);
                // console.log(sum);
            }
        }
        else if (buttonString.includes("=") && buttonString.includes("x") ) {
            console.log("result if")
            console.log(prod);
            document.getElementById('display').textContent = prod.toString();
        }

        if (buttonString.includes("x") && !buttonString.includes("=")) {

            prod = 1;
            console.log(numArray, numArray.length);
            numArray = buttonString.split('x');
            for (let i = 0; i < numArray.length && buttonValue !== 'x'; i++) {
                console.log("if 1 start");
                prod *= Number(numArray[i]);
                // console.log(sum);
            }
        }
        else if (buttonString.includes("=") && buttonString.includes("x") ) {
            console.log("result if")
            console.log(prod);
            document.getElementById('display').textContent = prod.toString();
        }

        if (buttonString.includes("÷") && !buttonString.includes("=")) {


            console.log(numArray, numArray.length);
            numArray = buttonString.split('÷');
            quot = Number(numArray[0]);
            for (let i = 1; i < numArray.length && buttonValue !== '÷'; i++) {
                console.log("if 1 start");
                quot = quot / Number(numArray[i]);
                console.log(quot);
            }
        }
        else if (buttonString.includes("=") && buttonString.includes("÷") ) {
            console.log("result if")
            // console.log(prod);
            document.getElementById('display').textContent = quot.toString();
        }

        if (buttonString.includes("-") && !buttonString.includes("=")) {

            minus = 0;
            console.log(numArray, numArray.length);
            numArray = buttonString.split('-');
            for (let i = 0; i < numArray.length && buttonValue !== '-'; i++) {
                console.log("if 1 start");
                minus = -minus-Number(numArray[i]) ;
                // console.log(sum);
            }
        }
        else if (buttonString.includes("=") && buttonString.includes("-") ) {
            console.log("result if")
            // console.log(prod);
            document.getElementById('display').textContent = minus.toString();
        }
    })
    // {
    //     let buttonValue = button.value;
    // }
    // console.log(buttons[i]);

}
// function removeElm() {
//     let buttonValue = button.value;
//     document.getElementById('display').textContent = buttonValue;
//     // document.getElementById('display').textContent = buttons[0].innerHTML;
// //     console.log(buttons.indexOf(7));
// }
