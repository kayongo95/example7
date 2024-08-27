let myIncrement = document.getElementById('plus');
let myDecrement = document.getElementById('minus')
let myReset = document.getElementById('reset');
let myCount = document.getElementById('counter');

let count = 0;

function incrementCounter() {
    myIncrement = count;
    count++;
    myCount.textContent = count;
}
incrementCounter();

function decrementCounter() {
    myDecrement = count;
    count--;
    myCount.textContent = count;
}
decrementCounter();

function resetCounter() {
    count = 0;
    myCount.textContent = count;
}
resetCounter();


