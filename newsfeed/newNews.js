const newsElement = document.querySelector(".new-news");
const scienceElement = document.querySelector(".science");
const techElement = document.querySelector(".tech");
const mathsElement = document.querySelector(".maths");
const resetElement = document.querySelector(".reset");
const bodyElement = document.querySelector("body");

const data = [
  {
    category: "science",
    author: "Pragya Swastik",
    content: "Science content",
    url: "https://www.inshorts.com/en/news/i-use-a-dumb-phone-that-only-makes-calls-sends-texts-breaking-bad-actor-1584276455594",
  },
  {
    category: "technology",
    author: "Pragya Swastik",
    content: "technology content",
    url: "https://www.inshorts.com/en/news/google-shares-5-basic-protective-measures-against-coronavirus-1584322241969",
  },
  {
    category: "maths",
    author: "Pragya Swastik",
    content: "maths content",
    url: "https://www.inshorts.com/en/news/google-shares-5-basic-protective-measures-against-coronavirus-1584322241969",
  },
];

// API
function onloadData(parentElement, data) {
  for (let news of data) {
    const paraElement = document.createElement("p");
    paraElement.textContent = news.content;
    const btnElement = document.createElement("button");
    btnElement.textContent = "save";
    btnElement.addEventListener("click", function () {
      const localData = JSON.parse(localStorage.getItem("oldnews"));
      if (localData && localData.length > 0) {
        localData.push(news);
        localStorage.setItem("oldnews", JSON.stringify(localData));
      } else {
        localStorage.setItem("oldnews", JSON.stringify([news]));
      }
    });
    parentElement.append(paraElement);
    parentElement.append(btnElement);
  }
}

onloadData(newsElement, data);

techElement.addEventListener("click", function () {
  this.style.background = "green";
  newsElement.style.display = "none";
  const filterElement = document.createElement("div");
  filterElement.className = "filter";
  bodyElement.append(filterElement);
  const filteredData = data.filter((news) => news.category === "technology");
  onloadData(filterElement, filteredData);
});

scienceElement.addEventListener("click", function () {
  this.style.background = "green";
  newsElement.style.display = "none";
  const filterElement = document.createElement("div");
  filterElement.className = "filter";
  bodyElement.append(filterElement);
  const filteredData = data.filter((news) => news.category === "science");
  onloadData(filterElement, filteredData);
});

resetElement.addEventListener("click", function () {
  this.style.background = "green";
  const filterElements = document.querySelectorAll(".filter");
  for (let filter of filterElements) {
    filter.remove();
  }
  newsElement.style.display = "block";
});
