// if

// const isUserLoggedIn = true;
// const temperature = 41;

// if (temperature < 50) {
//   console.log("less than 50");
// } else {
//   console.log("temperature is greater than 50");
// }

// if (2 == "2") {
//   console.log("executed");
// }

// <, >, <=, >=, ==,!=, ===

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 6000) {
//     console.log("less than 6000");
// } else {
//     console.log("less than 8000");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}