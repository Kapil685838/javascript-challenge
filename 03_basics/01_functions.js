function sayMyName() {
  console.log("K");
  console.log("A");
  console.log("P");
  console.log("I");
  console.log("L");
}

// sayMyName();

function addTwoNumbers(number1, number2) { // Parameters
    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2) { // Parameters
    // let result = number1 + number2
    // return result

    return number1 + number2
}

// addTwoNumbers(3, "4") // Arguments
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "kap") {
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }

    if(!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Kapil"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Hitesh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "Nisha",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));