const bodyElement = document.querySelector("body");
const textElement = document.querySelector(".text");

function display() {
  const searchText = document.querySelector("#search").value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`)
    .then((res) => res.json())
    .then((output) => {
      for (let data of output) {
        const definition = data["meanings"][0]["definitions"][0]["definition"];
        const textData = {
          key: searchText,
          value: definition,
        };
        const localData = JSON.parse(localStorage.getItem("words"));
        if (localData && localData.length > 0) {
          localData.push(textData);
          localStorage.setItem("words", JSON.stringify(localData));
        } else {
          localStorage.setItem("words", JSON.stringify([textData]));
        }
        textElement.textContent = definition;
      }
    });
}

function displayHistory() {
  textElement.textContent = "";
  const historyElement = document.querySelector(".history");
  const localData = JSON.parse(localStorage.getItem("words"));
  if (localData && localData.length > 0) {
    for (let data of localData) {
      const paraElement = document.createElement("p");
      paraElement.textContent = `${data["key"]} : ${data["value"]}`;
      historyElement.append(paraElement);
    }
  }
}
