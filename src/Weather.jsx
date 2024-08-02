import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './WeatherSlice';
import './Weather.scss';
import { FaSearch, FaWind } from 'react-icons/fa';
import { MdOutlineWaves } from 'react-icons/md';
import { TiWeatherCloudy, TiWeatherDownpour, TiWeatherShower, TiWeatherPartlySunny, TiWeatherSnow, TiWeatherStormy, TiWeatherSunny, TiWeatherWindy, TiWeatherWindyCloudy } from "react-icons/ti";
import { BsClouds } from "react-icons/bs";
import { IoThunderstorm } from "react-icons/io5";
import { FaRegSnowflake } from "react-icons/fa";
import { RiMistFill } from "react-icons/ri";


const Weather = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.weather);
  console.log(weather);
  const handleSub = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(fetchData(value));
      setValue('');
    }
  };

  const weatherIcons = (icon) => {
    switch (icon) {
      case '01d': return <TiWeatherSunny />;
      case '01n': return <TiWeatherSunny />;
      case '02d': return <TiWeatherPartlySunny />;
      case '02n': return <TiWeatherPartlySunny />;
      case '03d': return <TiWeatherCloudy />;
      case '04d': return <BsClouds />
      case '04n': return <TiWeatherWindyCloudy />;
      case '09d': return <TiWeatherShower />
      case '09n': return <TiWeatherShower />;
      case '10d': return <TiWeatherDownpour />;
      case '10n': return <TiWeatherDownpour />;
      case '11d': return <IoThunderstorm />
      case '11n': return <TiWeatherStormy />;
      case '13d': return <FaRegSnowflake />
      case '13n': return <TiWeatherSnow />;
      case '50d': return <RiMistFill />
      case '50n': return <TiWeatherWindy />;
      default: return <TiWeatherCloudy />;
    }
  };


  const date = new Date();
  const dateOnly = date.toLocaleDateString();

  return (
    <div className="weather-container">
      <div className="weather-card">
        <form onSubmit={handleSub}>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className="search"
            type="text"
            placeholder="Search city name"
          />
          <button className="subBtn" type="submit">
            <FaSearch />
          </button>
        </form>
        {weather && (
          <div>
            <div className='icon'>
              {weatherIcons(weather.icon)}
            </div>
            <div className="temperature">
              {Math.ceil(weather.temperature)}°<span>C</span>
            </div>
            <div className="maincity">
              <div className="city">{weather.place}</div>
              <div className="date">{dateOnly}</div>
            </div>
            <div className="details">
              <div className="detail">
                <div className="label">
                  <FaWind />
                  Wind
                </div>
                <div className="value">{weather.windSpeed} km/h</div>
              </div>

              <div className="detail">
                <div className="label">
                  <MdOutlineWaves />
                  Humidity
                </div>
                <div className="value">{weather.humidity}%</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
