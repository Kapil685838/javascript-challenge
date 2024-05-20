let a = 300;
// const b = 10;
// var c = 300;

if (true) {
  let a = 10;
  const b = 10;
  //   var c = 30;
  // console.log("INNER: ", a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "kapil";

  function two() {
    const website = "github";
    console.log("username ----> ", username);
  }
  
  // console.log("website ----> ", website);
  two();
}

// console.log("username ----> ", username);

// one();

if(true) {
  const username = "kapil"

  if(username === "kapil") {
    const website = " github";
    // console.log("username & website ----> ", username + website);
  }

  // console.log("website", website)
}

// console.log("username", username);


// +++++++++++++++++++++ Interesting ++++++++++++++++++++

// console.log(addOne(5))

function addOne(num) {
  return num + 1;
}


// addOne(5);

console.log(addOne(5))


const addTwo = function(num) {
  return num + 2;
}

addTwo(5)


