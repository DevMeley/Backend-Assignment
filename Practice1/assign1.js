const calculator = ( a, b, operator) => {

   if (operator === "Add") {
        const add = a + b
        return add
   }
   else if (operator === "substract") {
        const substract = a - b
        return substract
   }
   else if (operator === "multiply") {
        const multiply = a * b
        return multiply
   }
   else if (operator === "divide") {
        const divide = a / b
        return divide
   }
}

console.log (calculator(2, 4, 'Add'))
console.log (calculator(2, 4, 'substract'))
console.log (calculator(2, 4, 'multiply'))
console.log (calculator(2, 4, 'divide'))


