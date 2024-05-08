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
     
    </div>
  );
};

export default App;
