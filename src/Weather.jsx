import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './WeatherSlice';
import './Weather.scss';
import { FaSearch, FaWind } from 'react-icons/fa';
import { MdOutlineWaves } from 'react-icons/md';
import { TiWeatherCloudy,TiWeatherDownpour,TiWeatherPartlySunny,TiWeatherShower ,TiWeatherSnow ,TiWeatherStormy ,TiWeatherSunny,TiWeatherWindy ,TiWeatherWindyCloudy  } from "react-icons/ti";


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
        {weather &&(
          <div>
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
