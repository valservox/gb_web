function sum(num1,num2) {
    return num1 + num2
}

function diff(num1,num2) {
    return num1 - num2
}

function mult(num1,num2) {
    return num1 * num2
}

function div(num1,num2) {
    return num1 / num2
}

var _sum = "+";
var _diff = "-";
var _mult = "*";
var _div = "/";

var operationDict =  {};
operationDict[_sum] = sum;
operationDict[_diff] = diff;
operationDict[_mult] = mult;
operationDict[_div] = div;

function inputOperation() {
    
    let operation = prompt(`Введите арифмитическую операцию (${Object.keys(operationDict)})`)

    alert(operation)

    if (String(operation) in operationDict) {
        return operation
    }

    else {
        alert("Повторите попытку (оператор не поддерживается)")
        inputOperation()
    }
}

var operation = inputOperation()

var num1 = parseInt(prompt(`X ${operation} y`))
var num2 = parseInt(prompt(`${num1} ${operation} Y`))

alert(`${num1} ${operation} ${num2}  = ${operationDict[operation](num1,num2)}`)