const url = 'https://api.openweathermap.org/data/2.5/weather'; const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
    weatherFn('Boston, New York, Madrid');
});
async function weatherFn(cities) {
    // Clear previous results
    $('#multi-city-weather').empty();

    // Split input by commas and trim whitespace
    const cityList = cities.split(',').map(city => city.trim()).filter(Boolean);

    if(cityList.length === 0) {
        alert("Please enter at least one city name.");
        return;
    }

    // Fetch weather for each city
    for (const city of cityList) {
        await fetchAndShowCityWeather(city);
    }
}

async function fetchAndShowCityWeather(city) {
    const apiUrl = `${url}?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`City not found: ${city}`);

        const data = await res.json();
        displayCityWeather(data);
    } catch (error) {
        console.error('Error fetching weather for', city, error);
        $('#multi-city-weather').append(`<p style="color:red;">Error fetching data for "${city}".</p>`);
    }
}

function displayCityWeather(data) {
    const weatherCardHtml = `
    <div class="weather-card" style="margin-bottom: 20px;">
        <h3>${data.name}</h3>
        <p>${moment().format('MMMM Do YYYY, h:mm a')}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Icon" />
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    </div>`;

    $('#multi-city-weather').append(weatherCardHtml);
}
