const previousOperandTextElement = document.getElementById("previous-operand");
const currentOperandTextElement = document.getElementById("current-operand");
let operand = "";

function allClearDisplay() {
    previousOperandTextElement.innerHTML = "";
    currentOperandTextElement.innerHTML = "";
    operand = "";
    addends = [];
    operators = [];
    checkPt = false;
}

function addNumber(value) {
    if (currentOperandTextElement.innerHTML == "0") {
        currentOperandTextElement.innerHTML = value;
    } else if (currentOperandTextElement.innerHTML.length < 30 && (currentOperandTextElement.innerHTML.length > 0 || value != 0)) {
        currentOperandTextElement.innerHTML += value;
    }
    else if (value == "0") {
        currentOperandTextElement.innerHTML = "0";
    }
}

function choseOperation(operation) {
    if (currentOperandTextElement.innerHTML === "") {
        if (previousOperandTextElement.innerHTML !== "")
            operand = operation;
            previousOperandTextElement.innerHTML = previousOperandTextElement.innerHTML.replace(/.$/, operation);
        return;
    }   
    let result;
    let previousOperandValue;
    let currentOperandValue;
    if (operand !== "") {
        let oldOperand = operand;
        operand = "";
        choseOperation(oldOperand);
        previousOperandTextElement.innerHTML = previousOperandTextElement.innerHTML.replace(/.$/, operation);
        operand = operation;
        return;
    }
    switch(operation) {
        case '+':
            operand = "+";
            if (previousOperandTextElement.innerHTML === "") {
                //alert("if");
                previousOperandTextElement.innerHTML = currentOperandTextElement.innerHTML + " " + operation;
                currentOperandTextElement.innerHTML = "";
            } else {
                previousOperandValue = parseFloat(previousOperandTextElement.innerHTML);
                currentOperandValue = parseFloat(currentOperandTextElement.innerHTML);
                result = previousOperandValue + currentOperandValue;
                previousOperandTextElement.innerHTML = result.toString() + " " + operation;
                currentOperandTextElement.innerHTML = "";
            }
            break;
        case '-':
            operand = "-";
            if (previousOperandTextElement.innerHTML === "") {
                previousOperandTextElement.innerHTML = currentOperandTextElement.innerHTML + " " + operation;
                currentOperandTextElement.innerHTML = "";
            } else {
                previousOperandValue = parseFloat(previousOperandTextElement.innerHTML);
                currentOperandValue = parseFloat(currentOperandTextElement.innerHTML);
                result = previousOperandValue - currentOperandValue;
                previousOperandTextElement.innerHTML = result.toString() + " " + operation;
                currentOperandTextElement.innerHTML = "";
            }
            break;
        case '*':
            operand = "*";
            if (previousOperandTextElement.innerHTML === "") {
                //alert("if");
                previousOperandTextElement.innerHTML = currentOperandTextElement.innerHTML + " " + operation;
                currentOperandTextElement.innerHTML = "";
            } else {
                previousOperandValue = parseFloat(previousOperandTextElement.innerHTML);
                currentOperandValue = parseFloat(currentOperandTextElement.innerHTML);
                result = previousOperandValue * currentOperandValue;
                previousOperandTextElement.innerHTML = result.toString() + " " + operation;
                currentOperandTextElement.innerHTML = "";
            }
            break;
        case '/':
            operand = "/";
            if (previousOperandTextElement.innerHTML === "") {
                previousOperandTextElement.innerHTML = currentOperandTextElement.innerHTML + " " + operation;
                currentOperandTextElement.innerHTML = "";
            } else {
                previousOperandValue = parseFloat(previousOperandTextElement.innerHTML);
                currentOperandValue = parseFloat(currentOperandTextElement.innerHTML);
                result = previousOperandValue / currentOperandValue;
                previousOperandTextElement.innerHTML = result.toString() + " " + operation;
                currentOperandTextElement.innerHTML = "";
            }
            break;
        case '%':
            operand = "%";
            if (previousOperandTextElement.innerHTML === "") {
                previousOperandTextElement.innerHTML = currentOperandTextElement.innerHTML + " " + operation;
                currentOperandTextElement.innerHTML = "";
            } else {
                previousOperandValue = parseFloat(previousOperandTextElement.innerHTML);
                currentOperandValue = parseFloat(currentOperandTextElement.innerHTML);
                result = previousOperandValue % currentOperandValue;
                previousOperandTextElement.innerHTML = result.toString() + " " + operation;
                currentOperandTextElement.innerHTML = "";
            }
            break;
    }
}

function equalsResult() {
    if (currentOperandTextElement.innerHTML === "") {
        currentOperandTextElement.innerHTML = previousOperandTextElement.innerHTML.replace(/.$/, "");
        previousOperandTextElement.innerHTML = "";
        return;
    }
    choseOperation(operand);
    equalsResult();
}

function cancel() {
    currentOperandTextElement.innerHTML = "";
}

function backspace() {
    currentOperandTextElement.innerHTML = currentOperandTextElement.innerHTML.replace(/.$/,"");
}