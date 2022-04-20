// console.log("it works")

let red = document.getElementById('rangeRed');
let green = document.getElementById('rangeGreen');
let blue = document.getElementById('rangeBlue');
let result = document.getElementById('body');

function changeBackground() {
    // console.log('rgb(' + red.value + green.value + blue.value + ')')
    result.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')'
}
