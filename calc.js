function show(numb) {
    textBox = document.getElementById("calculatorTextBox");
    currentValue = textBox.value;
    newValue = currentValue.value + numb;
    document.getElementById("calculatorTextBox") = newValue;
}


