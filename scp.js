const apiKey = "f0585eaa0c34fcfd63e9a8e02e4bb6fe";
      const city = "New York";

      async function getWeather() {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        const data = await response.json();

        const temperature = data.main.temp;
        const description = data.weather[0].description;

        document.getElementById("city").innerHTML = city;
        document.getElementById("temperature").innerHTML = `Temperature: ${temperature}°F`;
        document.getElementById("description").innerHTML = `Description: ${description}`;
      }

      getWeather();