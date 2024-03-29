//API
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature-now");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#new-city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

//City searcher
function searchCity(city) {
  let apiKey = "7145tacf48aad88be65c0b31aoec2f85";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

//form
function searcher(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");

  searchCity(searchInput.value);
}

let cityImput = document.querySelector("#city-form");
cityImput.addEventListener("submit", searcher);

searchCity("Cologne");
