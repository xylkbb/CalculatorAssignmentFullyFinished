const currentCalculation = [];

function putOnEnd(num) {
    let element = document.getElementById("number");
    let existingText = element.value;

    if (existingText === "0") {
        existingText = "";
    }

    let newText = existingText + num;
    console.log("Existing Text: " + existingText);
    console.log("Number is: " + num);
    element.value = newText;
}

function clearText() {
    document.getElementById("number").value = "";
    let calc = document.getElementById("calc");
    calc.value = "";
    currentCalculation.length = 0;
}

function plus() {
    let element = document.getElementById("number");
    let existingText = element.value;

    if (existingText === "") {
        existingText = "0";
    }
    element.value = existingText;
    currentCalculation.push(element.value);
    currentCalculation.push("+");
    let calc = document.getElementById("calc");
    calc.value = currentCalculation.join(" ");
    element.value = "";
}

function minus() {
    let element = document.getElementById("number");
    let existingText = element.value;

    if (existingText === "") {
        existingText = "0";
    }
    element.value = existingText;
    currentCalculation.push(element.value);
    currentCalculation.push("-");
    let calc = document.getElementById("calc");
    calc.value = currentCalculation.join(" ");
    element.value = "";
}

function multiply() {
    let element = document.getElementById("number");
    let existingText = element.value;

    if (existingText === "") {
        existingText = "0";
    }
    element.value = existingText;
    currentCalculation.push(element.value);
    currentCalculation.push("x");
    let calc = document.getElementById("calc");
    calc.value = currentCalculation.join(" ");
    element.value = "";
}

function divide() {
    let element = document.getElementById("number");
    let existingText = element.value;

    if (existingText === "") {
        existingText = "0";
    }
    element.value = existingText;
    currentCalculation.push(element.value);
    currentCalculation.push("/");
    let calc = document.getElementById("calc");
    calc.value = currentCalculation.join(" ");
    element.value = "";
}

function calculate() {
    let element = document.getElementById("number");
    let existingText = element.value;

    if (existingText === "") {
        existingText = "0";
    }
    currentCalculation.push(element.value);

    doTheMath();

}

function doTheMath() {
    let input = document.getElementById("number");
    input.value = "";
    let calc = document.getElementById("calc");
    calc.value = "";

    if (currentCalculation.length === 0) {
        input.value = "0";
    } else if (currentCalculation.length === 1) {
        input.value = currentCalculation[0];
    } else {
        let total = 0;
        let firstNum = +currentCalculation.shift();
        let operator = currentCalculation.shift();
        let secondNum = +currentCalculation.shift();
        if (operator === "+") {
            total = firstNum + secondNum;

        } else if (operator === "-") {
            total = firstNum - secondNum
        } else if (operator === "x") {
            total = firstNum * secondNum
        } else if (operator === "/") {
            total = firstNum / secondNum
        }


        while (currentCalculation.length > 0) {
            operator = currentCalculation.shift();
            let number = +currentCalculation.shift();
            if (operator === "+") {
                total += number;
            } else if (operator === "x") {
                total *= number;
            }else if (operator === "/"){
                total /= number;
            } else {
                total -= number;
            }
        }

        input.value = total;
    }




}