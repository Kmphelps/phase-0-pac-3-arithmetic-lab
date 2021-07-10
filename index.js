let number = 10;

function add() {
    return number += 1;
}

function subtract() {
    return number -= 1;
}

function divide() {
    return number /= 1;
}

function multiply() {
    return number *= 1;
}

function add(a,b) {
    return(a + b); 
}
console.log(2, 2)

function subtract(a,b) {
    return(a - b); 
}
console.log(4, 2)

function multiply(a,b) {
    return(a * b); 
}
console.log(4, 2)

function divide(a,b) {
    return(a / b); 
}
console.log(4, 2)

function increment(n) {
    n++; 
    return n;
}
 console.log(2)

 function decrement(n) {
    n--; 
    return n;
}
 console.log(2)

 function makeInt(n) {
     return parseInt(n, 10);
 }

 console.log('2.222222')

 function preserveDecimal(n) {
    return parseFloat(n, 10);
}

console.log('2.222222')
