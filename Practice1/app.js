function demoFuction(){
    console.log('This is a function');
}

demoFuction()

const demoFuction2 = () => {
    console.log("This is a const fuction")
}

demoFuction2()

const mathFuuction = (a , b) => {
    const Add = a + b
    return Add
}


console.log("The result is: " , mathFuuction(2, 3))

const math = 6 + 5
console.log("The result of math and mathFuction is: ", math + mathFuuction(2,3))

const price = [50, 40, 49, 45]
price.forEach((item ) => {
    const prices = item + 2
    console.log(prices)
})

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.forEach((num) => {
    if (num%2 === 0) {
        console.log("Even num are", num)
    }
})
