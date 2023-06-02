const symbolElement = document.querySelector("#symbol");
const timeFrames = {
  daily: "TIME_SERIES_DAILY_ADJUSTED",
  weekly: "TIME_SERIES_WEEKLY",
  monthly: "TIME_SERIES_MONTHLY",
};
let timeStamp = timeFrames["daily"];

async function display() {
  console.log(symbolElement.value);
  const symbol = symbolElement.value.toUpperCase();
  fetch(
    `https://www.alphavantage.co/query?function=${timeStamp}&symbol=${symbol}&apikey=demo`
  )
    .then((res) => res.json())
    .then((output) => {
      console.log(output);
    });
}

function setTimeFrame(time) {
  timeStamp = timeFrames[time];
  console.log(timeStamp);
}
