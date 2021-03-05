function showTemperature(response) {

    let currentTemperature = Math.round(response.data.main.temp);
    let feelsLikeTemperature = Math.round(response.data.main.feels_like);
    let currentHumidity = Math.round(response.data.main.humidity);
    let currentWindSpeed = Math.round(response.data.wind.speed);

    let temp = document.querySelector("#temp");
    temp.innerHTML = `${currentTemperature}°C`;
    let feelsLike = document.querySelector("#feels-like");
    feelsLike.innerHTML = `${feelsLikeTemperature}°C`;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `${currentHumidity}%`;
    let windSpeed = document.querySelector("#wind-speed");
    windSpeed.innerHTML = `${currentWindSpeed}km/h`;

}

function updateCity(event) {
    event.preventDefault();
    let updatedCity = document.querySelector("#type-city-form");
    let cityId = document.querySelector("#city");

    cityId.innerHTML = updatedCity.value;

    let city = updatedCity.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    let apiKey = "6f15b9e63ca98a2a211c4686cbce00b6";

    axios.get(`${url}&appid=${apiKey}`).then(showTemperature);

}

let form = document.querySelector("#search-engine");
form.addEventListener("submit", updateCity);

function updateCurrentCity(response) {

    let currentTemperature = Math.round(response.data.main.temp);
    let city = (response.data.name);
    let feelsLikeTemperature = Math.round(response.data.main.feels_like);
    let currentHumidity = Math.round(response.data.main.humidity);
    let currentWindSpeed = Math.round(response.data.wind.speed);

    let temp = document.querySelector("#temp");
    temp.innerHTML = `${currentTemperature}°C`;
    let cityId = document.querySelector("#city");
    cityId.innerHTML = city;
    let feelsLike = document.querySelector("#feels-like");
    feelsLike.innerHTML = `${feelsLikeTemperature}°C`;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `${currentHumidity}%`;
    let windSpeed = document.querySelector("#wind-speed");
    windSpeed.innerHTML = `${currentWindSpeed}km/h`;

}

function showPosition(position) {

    let latitude = (position.coords.latitude);
    let longitude = (position.coords.longitude);

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=6f15b9e63ca98a2a211c4686cbce00b6`;

    axios.get(url).then(updateCurrentCity);
}


function searchCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);

}

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", (searchCurrentLocation));

let now = new Date;
let currentDate = now.getDate();
let currentYear = now.getFullYear();

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let currentDay = days[now.getDay()];

let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];
let currentMonth = months[now.getMonth()];

let formattedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

let h2 = document.querySelector("h2");
h2.innerHTML = formattedDate;