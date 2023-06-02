const oldbtn = document.querySelector(".oldnews-btn");
const displayElement = document.querySelector(".display");

oldbtn.addEventListener("click", function () {
  const news = JSON.parse(localStorage.getItem("oldnews"));
  console.log("news from local storage", news);
  if (news && news.length > 0) {
    for (let newsContent of news) {
      const paraElement = document.createElement("p");
      console.log("news content", newsContent);
      paraElement.textContent = newsContent.content;
      displayElement.append(paraElement);
    }
  } else {
    const paraElement = document.createElement("p");
    paraElement.textContent = "No news available";
    displayElement.append(paraElement);
  }
});
