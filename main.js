const apiKey = "84ecf6e134b0bddeab48a363aaf447dd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to fetch and display weather data
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        // Display error message if the city is not found
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        // Update weather information
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '&#176;C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' kmph';

        // Update weather icon based on weather condition
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        // Show the weather information and hide the error message
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Event listener for the search button
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
