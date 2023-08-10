let now = new Date();
let span = document.querySelector("span");

let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
span.innerHTML = `${day} ${hours}:${minutes}`;

function showCity(event) {
  event.preventDefault();
  let typeInput = document.querySelector("#form");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${typeInput.value}`;

  let apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
  let units = "metric";
  let city = document.querySelector("#form").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=${units}`;
  axios.get(url).then(weatherData);
}

let cityType = document.querySelector("#search-form");
cityType.addEventListener("submit", showCity);

function weatherData(response) {
  let caption = response.data.name;
  let celsius = Math.round(response.data.main.temp);
  let cityRename = document.querySelector("#digit");
  let h1 = document.querySelector("h1");
  h1.innerHTML = caption;
  cityRename.innerHTML = `${celsius}°C`;
}

function searchLocation(position) {
  let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(weatherData);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
