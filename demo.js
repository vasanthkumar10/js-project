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

data: [
  {
    category: "technology",
    author: "Pragya Swastik",
    content:
      "American actor Aaron Paul, who portrayed Jesse Pinkman in 'Breaking Bad', revealed that he uses a 'credit card-sized dumb phone' that cannot store any apps and can only make calls and send texts. \"There's no camera or emailing,\" Paul said, adding that he's planning to buy a flip phone. \"I haven't owned a computer in over 10 years,\" he added.",
    url: "https://www.inshorts.com/en/news/i-use-a-dumb-phone-that-only-makes-calls-sends-texts-breaking-bad-actor-1584276455594",
  },
  {
    category: "technology",
    author: "Pragya Swastik",
    content:
      "Google recently shared five basic protective measures against coronavirus that can be followed by people worldwide. These include washing hands often, coughing into the elbow, not touching the face, staying over three feet apart from others and staying at home on feeling sick. Google engineers are also building a website to screen potential coronavirus patients in the US.",
    url: "https://www.inshorts.com/en/news/google-shares-5-basic-protective-measures-against-coronavirus-1584322241969",
  },
  {
    category: "science",
    author: "MS Dhoni",
    content: "How to handle knee surgery?",
    url: "https://www.inshorts.com/en/news/google-shares-5-basic-protective-measures-against-coronavirus-1584322241969",
  },
  {
    category: "science",
    author: "MS Dhoni",
    content: "How to handle knee surgery?",
    url: "https://www.inshorts.com/en/news/google-shares-5-basic-protective-measures-against-coronavirus-1584322241969",
  },
  {
    category: "science",
    author: "MS Dhoni",
    content: "How to handle knee surgery?",
    url: "https://www.inshorts.com/en/news/google-shares-5-basic-protective-measures-against-coronavirus-1584322241969",
  },
];
