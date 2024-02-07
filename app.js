document.addEventListener('DOMContentLoaded', function () {
          const apiKey = 'YOur API...go on (openWeatherMap)'; // i remove this API when i post on github
          const city = 'sitamarhi';
        
          const cityNameElement = document.getElementById('city-name');
          const temperatureElement = document.getElementById('temperature');
          const weatherDescriptionElement = document.getElementById('weather-description');
          const img1Element = document.querySelector('.img1');
          const img2Element = document.querySelector('.img2');
        
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
          fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
              const temperature = data.main.temp;
              const description = data.weather[0].description;
        
              cityNameElement.textContent = city;
              temperatureElement.textContent = `Temperature: ${temperature}°C`;
              weatherDescriptionElement.textContent = `Weather: ${description}`;
        
              if (temperature < 10) {
                img1Element.style.display = 'block';
                img2Element.style.display = 'none';
              } else {
                img1Element.style.display = 'none';
                img2Element.style.display = 'block';
              }
            })
            .catch(error => console.error('Error fetching data:', error));
        });
        

        
