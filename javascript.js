function displayFahrenheit(event) {
    event.preventDefault;
    let fahrenheitTemperature = Math.round((celsjusTemperature * 9) / 5 + 32);
    let temp = document.querySelector("#temp");
    temp.innerHTML = `${fahrenheitTemperature}`;
}

let fahrenheitLink = document.querySelector("fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheit);


function showTemperature(response) {
    console.log(response.data.weather[0].icon)

    let celsjusTemperature = Math.round(response.data.main.temp);
    let feelsLikeTemperature = Math.round(response.data.main.feels_like);
    let currentHumidity = Math.round(response.data.main.humidity);
    let descriptionElement = response.data.weather[0].description;
    let currentWindSpeed = Math.round(response.data.wind.speed);
    let weatherIcon = response.data.weather[0].icon;

    let temp = document.querySelector("#temp");
    temp.innerHTML = `${celsjusTemperature}`;
    let feelsLike = document.querySelector("#feels-like");
    feelsLike.innerHTML = `${feelsLikeTemperature}°C`;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `${currentHumidity}%`;
    let windSpeed = document.querySelector("#wind-speed");
    windSpeed.innerHTML = `${currentWindSpeed}km/h`;
    let description = document.querySelector("#description");
    description.innerHTML = descriptionElement;
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconElement.setAttribute("alt", descriptionElement);
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



function search(city) {
    let apiKey = "6f15b9e63ca98a2a211c4686cbce00b6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature)

    //
    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
}



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
    "March",
    "April",
    "May",
    "June",
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

search("Kraków");