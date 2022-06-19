import axios from "axios";
let date = new Date();
let daysOfWeek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
let wDay = document.querySelector("#week-Day");
wDay.innerHTML = daysOfWeek[date.getDay()];
let time = document.querySelector("#time");
time.innerHTML = `${date.getHours()}:${date.getMinutes()}`;

let apiKey = "1dbaf30f100bc3f17acbc909606b0e7f";

function changeCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  h1.innerHTML = input.value;
  let city = input.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showParameters);
}

function showParameters(response) {
  let curTemp = document.querySelector("#now-value");
  curTemp.innerHTML = Math.round(response.data.main.temp);
  nTemp = Math.round(response.data.main.temp);
  let humid = document.querySelector("#humidity");
  let windSp = document.querySelector("#wind-speed");
  humid.innerHTML = Math.round(response.data.main.humidity);
  windSp.innerHTML = Math.round(response.data.wind.speed);
}

let form = document.querySelector("form");
form.addEventListener("submit", changeCity);

function change() {
  nowTemp.innerHTML = Math.round(nTemp * (9 / 5) + 32);
}
function toCelsius() {
  let nowTemp = document.querySelector("#now-value");
  nowTemp.innerHTML = Math.round(nTemp);
}
let fahrenheitSign = document.querySelector(".link_fahren");
let input = document.querySelector("input");

let nowTemp = document.querySelector("#now-value");
let nTemp = nowTemp.innerHTML;

fahrenheitSign.addEventListener("click", change);
let celsiusSign = document.querySelector(".link_celsius");
celsiusSign.addEventListener("click", toCelsius);

function displayCity(response) {
  console.log(response);
  let heading = document.querySelector("h1");
  heading.innerHTML = response.data.name;
}
function showByPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiPosUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiPosUrl).then(showParameters);
  axios.get(apiPosUrl).then(displayCity);
}
function getPosition() {
  navigator.geolocation.getCurrentPosition(showByPosition);
}
let locButton = document.querySelector("#current-location");
locButton.addEventListener("click", getPosition);
