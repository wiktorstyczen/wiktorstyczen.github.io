const apiKey = "beba20f04dc80650e27862052f0c8f5b";
      const city = "Kielce";

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
