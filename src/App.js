import React, { useState } from 'react';
import './App.css';




const App = () => {

const apiKey = 'da2be66af33c9e4f44345778c33c1b53'
const [weatherData, setWeatherData] = useState([{}])
const [city, setCity] = useState("")



const getWeather = (event) => {
  if (event.key == "Enter") {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
      response => response.json()
    ).then(
      data => {
        setWeatherData(data)
        //reseting the input field 
        setCity("")
      }
    )
  }
}
 


  return (
    <div className='container'>
      <input className='input' 
      placeholder="Enter City..." 
      type="text"
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather} 
      />

      {typeof weatherData.main === 'undefined' ? (
        <div>
          <p>Welcome to Weather App! Enter in a city name to get the weather.</p>
        </div>

      ):(
        <div className='weather-data'>
          <p className='city'>{weatherData.name}</p>
          <p className='temp'>{Math.round(weatherData.main.temp)}°F</p>
          <p className='weather'>{weatherData.weather[0].main}</p>

        </div>
      )}
     
    </div>
  );
};

export default App;
