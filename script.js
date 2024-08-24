// adds the value of the clicked button to the calculator's input field
function display(val) {
    // appends the button's values to the current content of the screen
    document.getElementById('result').value += val;
    return val; // returns the value added to the screen
}

/* evaluates the mathematical expression displayed on the screen 
   and updates the input field with the result */
function solve() {
    // retrives the math expression from the input field
    let x = document.getElementById('result').value;
    // evaluate the expression using eval function
    let y = eval(x);
    // display the result in the input field
    document.getElementById('result').value = y;
    return y; // returns the calculated result
}

// clears the input field to reset the calculator
function clearScreen() {
    // empties the input field
    document.getElementById('result').value = '';
}