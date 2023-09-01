import React, { useState } from 'react'
import './weatherApp.css' ;
import clear from '../assets/clear.png';
import cloud from '../assets/cloud.png';
import drizzle from '../assets/drizzle.png';
import humidity from '../assets/humidity.png';
import rain from '../assets/rain.png';
import search_icon from '../assets/search.png';
import snow from '../assets/snow.png';
import wind from '../assets/wind.png';


const WaetherApp = () => {
    const [weIcon , setWeIcon] = useState(clear)
    const api_key = '66a62ed6ca79a9094c3ec6a64e128f8f';
    const search = async () =>{
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value ===""){
            return 0 ;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&APPID=${api_key}`
        let response = await  fetch(url);
        // console.log(url);
        let  data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-percent")
        const temp = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        temp[0].innerHTML =data.main.temp +"C°" ;
        location[0].innerHTML =element[0].value
        wind[0].innerHTML = data.wind.speed + "km/h";
        humidity[0].innerHTML = data.main.humidity + " %";

        if(data.weather[0].icon ==="01d" ||data.weather[0].icon ==="01n")
        {
            setWeIcon (clear)
        } 
        else if(data.weather[0].icon ==="02d" ||data.weather[0].icon ==="02n")
        {
            setWeIcon(cloud)
        }
        else if(data.weather[0].icon ==="03d" ||data.weather[0].icon ==="03n")
        {
            setWeIcon(drizzle)
        }
        else if(data.weather[0].icon ==="04d" ||data.weather[0].icon ==="04n")
        {
            setWeIcon(drizzle)
        }
        else if(data.weather[0].icon ==="09d" ||data.weather[0].icon ==="09n")
        {
            setWeIcon(rain)
        }
        else if(data.weather[0].icon ==="10d" ||data.weather[0].icon ==="10n")
        {
            setWeIcon(rain)
        }
        else if(data.weather[0].icon ==="13d" ||data.weather[0].icon ==="13n")
        {
            setWeIcon(snow)
        }
        else{
            setWeIcon(clear)
        }
    }

  return (
    <div>
    <div className="container">
    <div className='top-bar'>
      <input type='text' className='cityInput' placeholder='Search City'/>
      <div className='search-icon' onClick={() =>search()}>
        <img src={search_icon} alt='snow'/>
      </div>
    </div>
    <div className='weather-img'>
        <img src={weIcon} alt='' />
    </div>
    <div className='weather-temp'>24</div>
    <div className='weather-location'>London</div>
    <div className='data-container'>
        <div className='element'>
            <img src={humidity} alt='' className='icon'/>
            <div className='data'>
                <div className='humidity-percent'>64%</div>
                <div className='text'>Humidity</div>
            </div>
        </div>

        <div className='element'>
            <img src={wind} alt='' className='icon'/>
            <div className='data'>
                <div className='wind-percent'>18 km/h</div>
                <div className='text'>Wind Speed</div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default WaetherApp
