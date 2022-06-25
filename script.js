var firstInput = parseFloat (prompt("Enter your first number"));
var operator = prompt("Enter operator(+,-,/,*");
var secondInput = parseFloat (prompt("Enter your second number"));

// If the logical operator || proves to be false then the else statement is being executed 
// if it comes out true then the alert(wrong Input displays)

if( isNaN(firstInput) ||isNaN(secondInput)) {
    alert("Wrong Input! Input must be a number")
} else{
if (operator == "-"){
    result = firstInput - secondInput;
}else if (operator == "+"){
    result = firstInput + secondInput;
} else if (operator == "/"){
    result = firstInput / secondInput;
} else if (operator == "*"){
    result = firstInput * secondInput;
}
}
alert(firstInput+operator+secondInput + "=" + result);