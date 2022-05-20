// `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
// const API_key = e709cbe777874096f83471c50c012b58
//     `https://api.openweathermap.org/data/2.5/weather?q=' + inputFilledText + '&appid=5e8caa04547b33bbc9dacc4b081f5ce3
// `

const loadWeather = () => {
    const locationInput = document.getElementById('location-input-field')
    const locationInputField = locationInput.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationInputField}&units=metric&appid=e709cbe777874096f83471c50c012b58`
    // console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
}

// humidity: 74
// pressure: 1003

// temp: 28.99
// temp_max: 28.99
// temp_min: 28.99
// id: 804, main: "Clouds", description: "overcast clouds",
const displayWeather = (data) => {
    console.log(data.weather[0].main)
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

    const cityName = document.getElementById('city-name')
    cityName.innerText = ` ${data.name},${data.sys.country}`
    const temperature = document.getElementById('temperature')
    temperature.innerText = ` ${data.main.temp}`
    const weatherInfo = document.getElementById('weather-info')
    weatherInfo.innerText = ` ${data.weather[0].main}`
    const feelsLike = document.getElementById('feels-like')
    feelsLike.innerText = ` ${data.main.feels_like}`
    const humidity = document.getElementById('humidity')
    humidity.innerText = ` ${data.main.humidity}`
}