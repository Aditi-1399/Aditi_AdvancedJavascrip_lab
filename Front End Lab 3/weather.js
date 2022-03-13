let api_key = "f75ba9cf2bac4e20eff685e5115516f8";
let url = "https://api.openweathermap.org/data/2.5/";

let input = document.getElementById("sBox");

input.addEventListener('keypress', display);

function display(evt) {
    if (evt.keyCode === 13) {
        getResults(input.value)
    }
}

function getResults(cityName) {
    console.log(cityName);
    fetch(url + "weather?q=" + cityName + "&units=metric&appid=" + api_key)
        .then(weather => weather.json()).then(response => displayResults(response));
}

function displayResults(response) {
    let city = document.getElementById("city");

    let date = document.getElementById("date");

    let temperature = document.getElementById("temperature");

    let weatherDescription = document.getElementById("weatherDescription");

    let condition = document.getElementById("condition");

    let d = new Date();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month = months[d.getMonth()];

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];

    date.innerText = day + " " + d.getDate() + " " + month + " " + d.getFullYear();

    city.innerText = response.name;
    temperature.innerText = `${Math.round(response.main.temp)}°C`;
    weatherDescription.innerText = response.weather[0].main;
    condition.innerText = `${Math.round(response.main.temp_min)}°C / ${Math.round(response.main.temp_max)}°C`;

}