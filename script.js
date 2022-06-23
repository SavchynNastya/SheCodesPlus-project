let date = new Date();
let daysOfWeek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
let wDay = document.querySelector("#week-Day");
wDay.innerHTML = daysOfWeek[date.getDay()];
let time = document.querySelector("#time");
time.innerHTML = `${date.getHours()}:${date.getMinutes()}`;

let apiKey = "1dbaf30f100bc3f17acbc909606b0e7f";

function displayDays(response) {
  console.log(response);
  let mon = document.querySelector("#monTemp");
  mon.innerHTML = Math.round(response.data.daily[1].temp.day);
  document.getElementById(
    "mon-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`;

  let tues = document.querySelector("#tuesTemp");
  tues.innerHTML = Math.round(response.data.daily[2].temp.day);
  document.getElementById(
    "tues-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`;

  let wed = document.querySelector("#wedTemp");
  wed.innerHTML = Math.round(response.data.daily[3].temp.day);
  document.getElementById(
    "wed-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`;

  let thur = document.querySelector("#thurTemp");
  thur.innerHTML = Math.round(response.data.daily[4].temp.day);
  document.getElementById(
    "thur-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`;

  let fri = document.querySelector("#friTemp");
  fri.innerHTML = Math.round(response.data.daily[5].temp.day);
  document.getElementById(
    "fri-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`;

  let sat = document.querySelector("#satTemp");
  sat.innerHTML = Math.round(response.data.daily[6].temp.day);
  document.getElementById(
    "sat-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.daily[6].weather[0].icon}@2x.png`;

  let sun = document.querySelector("#sunTemp");
  sun.innerHTML = Math.round(response.data.daily[0].temp.day);
  document.getElementById(
    "sun-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`;
}

function displayDaysByCity(response) {
  console.log(response);
  let mon = document.querySelector("#monTemp");
  mon.innerHTML = Math.round(response.data.list[0].main.temp);
  document.getElementById(
    "mon-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`;

  let tues = document.querySelector("#tuesTemp");
  tues.innerHTML = Math.round(response.data.list[6].main.temp);
  document.getElementById(
    "tues-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.list[6].weather[0].icon}@2x.png`;

  let wed = document.querySelector("#wedTemp");
  wed.innerHTML = Math.round(response.data.list[13].main.temp);
  document.getElementById(
    "wed-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.list[13].weather[0].icon}@2x.png`;

  let thur = document.querySelector("#thurTemp");
  thur.innerHTML = Math.round(response.data.list[20].main.temp);
  document.getElementById(
    "thur-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.list[20].weather[0].icon}@2x.png`;

  let fri = document.querySelector("#friTemp");
  fri.innerHTML = Math.round(response.data.list[28].main.temp);
  document.getElementById(
    "fri-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.list[28].weather[0].icon}@2x.png`;

  let sat = document.querySelector("#satTemp");
  sat.innerHTML = Math.round(response.data.list[35].main.temp);
  document.getElementById(
    "sat-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.list[35].weather[0].icon}@2x.png`;

  let sun = document.querySelector("#sunTemp");
  sun.innerHTML = Math.round(response.data.list[39].main.temp);
  document.getElementById(
    "sun-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png`;
}

function changeCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  h1.innerHTML = input.value;
  let city = input.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  //let apiByCity = `https://api.openweathermap.org/data/2.5/forecast?
  //  q=${city},us&mode=json&appid=${apiKey}`;
  //let apiByCity = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apiKey}&units=metric&cnt=7`;
  let apiByCity = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  //let apiCityUrl = `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${apiKey}`;
  axios.get(apiUrl).then(showParameters);
  axios.get(apiByCity).then(displayDaysByCity);
}

function showParameters(response) {
  let curTemp = document.querySelector("#now-value");
  curTemp.innerHTML = Math.round(response.data.main.temp);
  document.getElementById(
    "cur-weather"
  ).src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
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
  monTemp.innerHTML = Math.round(mTemp * (9 / 5) + 32);
  tuesTemp.innerHTML = Math.round(tuTemp * (9 / 5) + 32);
  wedTemp.innerHTML = Math.round(wTemp * (9 / 5) + 32);
  thurTemp.innerHTML = Math.round(thTemp * (9 / 5) + 32);
  friTemp.innerHTML = Math.round(fTemp * (9 / 5) + 32);
  satTemp.innerHTML = Math.round(sTemp * (9 / 5) + 32);
  sunTemp.innerHTML = Math.round(suTemp * (9 / 5) + 32);
}
function toCelsius() {
  let nowTemp = document.querySelector("#now-value");
  nowTemp.innerHTML = Math.round(nTemp);
  let monTemp = document.querySelector("#monTemp");
  monTemp.innerHTML = Math.round(mTemp);
  let tuesTemp = document.querySelector("#tuesTemp");
  tuesTemp.innerHTML = Math.round(tuTemp);
  let wedTemp = document.querySelector("#wedTemp");
  wedTemp.innerHTML = Math.round(wTemp);
  let thurTemp = document.querySelector("#thurTemp");
  thurTemp.innerHTML = Math.round(thTemp);
  let friTemp = document.querySelector("#friTemp");
  friTemp.innerHTML = Math.round(fTemp);
  let satTemp = document.querySelector("#satTemp");
  satTemp.innerHTML = Math.round(sTemp);
  let sunTemp = document.querySelector("#sunTemp");
  sunTemp.innerHTML = Math.round(suTemp);
}
let fahrenheitSign = document.querySelector(".link_fahren");
let input = document.querySelector("input");

let nowTemp = document.querySelector("#now-value");
let nTemp = nowTemp.innerHTML;
let monTemp = document.querySelector("#monTemp");
let mTemp = monTemp.innerHTML;
let tuesTemp = document.querySelector("#tuesTemp");
let tuTemp = tuesTemp.innerHTML;
let wedTemp = document.querySelector("#wedTemp");
let wTemp = wedTemp.innerHTML;
let thurTemp = document.querySelector("#thurTemp");
let thTemp = thurTemp.innerHTML;
let friTemp = document.querySelector("#friTemp");
let fTemp = friTemp.innerHTML;
let satTemp = document.querySelector("#satTemp");
let sTemp = satTemp.innerHTML;
let sunTemp = document.querySelector("#sunTemp");
let suTemp = sunTemp.innerHTML;

fahrenheitSign.addEventListener("click", change);
let celsiusSign = document.querySelector(".link_celsius");
celsiusSign.addEventListener("click", toCelsius);

function displayCity(response) {
  //console.log(response);
  let heading = document.querySelector("h1");
  heading.innerHTML = response.data.name;
}

function showByPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiDaysUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;
  let apiPosUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiPosUrl).then(showParameters);
  axios.get(apiPosUrl).then(displayCity);
  axios.get(apiDaysUrl).then(displayDays);
}
function getPosition() {
  navigator.geolocation.getCurrentPosition(showByPosition);
}
let locButton = document.querySelector("#current-location");
locButton.addEventListener("click", getPosition);
