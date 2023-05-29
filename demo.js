// callback fn

// hotel scenario
// Enter the hotel
// find a seat
// ask menu and order food
// prepare food
// serve food
// eat food
// pay the bill
// walk away

// function prepareFood(callbackFn) {
//   setTimeout(() => {
//     console.log("preparing food");
//     console.log("serve food");
//     callbackFn();
//   }, 2000);
// }

// function eatFood() {
//   setTimeout(() => {
//     console.log("eat food");
//     console.log("pay bill and walk away");
//   }, 1000);
// }

// function hotelScenario() {
//   console.log("Entering the hotel");
//   console.log("Find a seat");
//   console.log("ask menu and order food");
//   prepareFood(eatFood);
//   prepareFood(wasteFood);
// }

// hotelScenario();

// promise

function p1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //   console.log("in promise p1");
      res("p1 output");
    }, 2000);
  });
}

function p2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //   console.log("in promise p2");
      res("p2 output");
    }, 3000);
  });
}

function execute() {
  //   p1()
  //     .then((res) => {
  //       console.log("p1 resolved -> ", res);
  //       //   p2()
  //       //     .then((res) => console.log("p2 resolved -> ", res))
  //       //     .catch((err) => {
  //       //       console.log(err);
  //       //     });
  //       return p2();
  //     })
  //     .then((res) => console.log("p2 resolved", res))
  //     .catch((err) => {
  //       console.log(err);
  //     });

  Promise.race([p1(), p2()]).then((output) => console.log(output));
}

execute();
