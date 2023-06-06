const screenDisplay = document.querySelector('.screen') //'.screen' is used as screen is a class
const buttons = document.querySelectorAll('button') //anything with the element of 'button

let calculation = []
let accumulativeCalculation

function calculate(button){
    const value = button.textContent

    //if button "CLEAR" is clicked, array will become empty
    if(value === "CLEAR"){
        calculation = []
        screenDisplay.textContent = '.'
    }
    else if(value === "="){
        screenDisplay.textContent = eval(accumulativeCalculation)
    }
    else{
        //when we click on a button, we'll get the content of the button and push it into the alculation array
        calculation.push(value)
        //makes content of array to string
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))