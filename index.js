const movies = ["RRR", "KGF", "Vikram", "Pathan", "Pushpa"];
const movieWrapper = document.querySelector(".movieWrapper");
const seatWrapper = document.querySelector(".seatWrapper");
let selectedMovies = [];
let selectedSeats = [];

for (let movie of movies) {
  const movieElement = document.createElement("h2");
  movieElement.textContent = movie;
  movieElement.className = "movie";

  movieElement.addEventListener("click", function () {
    if (!this.selected) {
      this.style.border = "2px solid green";
      this.selected = true;
      selectedMovies.push(movie);
    } else {
      this.style.border = "";
      this.selected = false;
      selectedMovies = selectedMovies.filter(
        (selectedMovie) => selectedMovie !== movie
      );
    }

    if (selectedMovies.length > 0) {
      seatWrapper.style.display = "";
    } else {
      seatWrapper.style.display = "none";
    }
    // console.log(selectedMovies);
  });

  movieWrapper.append(movieElement);
}

if (selectedMovies.length === 0) {
  seatWrapper.style.display = "none";
}

for (let i = 1; i <= 25; i++) {
  const seatElement = document.createElement("p");
  seatElement.textContent = i;
  seatElement.className = "seat";

  seatElement.addEventListener("click", function () {
    if (!this.selected) {
      this.style.background = "green";
      this.selected = true;
      selectedSeats.push(i);
    } else {
      this.style.background = "grey";
      this.selected = false;
      selectedSeats = selectedSeats.filter(
        (selectedSeat) => selectedSeat !== i
      );
    }

    console.log(selectedSeats);
  });

  seatWrapper.append(seatElement);
}

function bookTicket() {
  const movieNamesElement = document.querySelector(".selectedMovies");
  const seatNamesElement = document.querySelector(".selectedSeats");
  selectedSeats = selectedSeats.sort((a, b) => a - b);

  movieNamesElement.textContent = `Selected Movies: ${selectedMovies}`;
  seatNamesElement.textContent = `Selected Seats: ${selectedSeats}`;
}
