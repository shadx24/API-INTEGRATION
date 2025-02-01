async function fetchWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = '62dfef126836f19bad066633c9797cf5'
    ; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.getElementById('result').innerHTML = `
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById('result').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById('result').innerHTML = "<p>Failed to fetch data. Try again.</p>";
    }
}
