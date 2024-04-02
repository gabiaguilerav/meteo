//API
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature-now");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#new-city");
  let conditionsElement = document.querySelector("#weather-condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#current-time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);

  conditionsElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;

  timeElement.innerHTML = formatDate(date);

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon-image" />`;
}

//Time
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
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

//Forecast
function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHTML = "";

  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
  <div class="forecast-container">
    <div class="day">${day}</div>
    <div class="forecast-icon-image">🌤</div>
    <div class="forecast-temperature">
         <div><strong>15º</strong></div>
         <div>9º</div>
    </div>
  </div>
`;
  });

  forecastElement.innerHTML = forecastHTML;
}

displayForecast();
