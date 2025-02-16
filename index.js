const apiKey = "188264ac00ef57c117537ca1ffa468be"; 

async function getData() {
    let city = document.getElementById("input").value;

    if (city.trim() === "") {
        alert("Please enter a city name!");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === "404") {
            alert("City not found! Enter a valid city.");
            return;
        }


        
        
        document.querySelector(".dd").innerHTML = `${Math.round(data.main.temp)}<sup>°</sup>`;
        document.querySelector(".ptag").innerText = "Celsius";
        document.getElementById("ws").innerText = `${data.wind.speed}`;
        document.getElementById("hmdty").innerText = `${data.main.humidity}`;
        updateWeatherIcon(data.weather[0].main);

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

