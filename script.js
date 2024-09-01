
function add(x,y) {
    z = x + y;
    return z;
}

function subtract(x,y) {
    z = x - y;
    return z;
}

function multiply(x,y) {
    z = x * y;
    return z;
}

function divide(x,y) {
    z = x / y;
    return z;
}
function powerOf(x,y) {
    z = x **y;
    return z;
}

function rootOf(x) {
    z = Math.sqrt(x);
    return z;
}

const textBox = document.getElementById("textBox");

const addButton = document.getElementById("addButton");

function appendToTextBox (string) {
    textBox.value += string;
};

addButton.addEventListener("click", () => appendToTextBox(addButton.innerHTML));