//City searcher
function searcher(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let cityElement = document.querySelector("#new-city");
  cityElement.innerHTML = searchInput.value;
}

let cityImput = document.querySelector("#city-form");
cityImput.addEventListener("submit", searcher);
