import React, { useEffect, useState } from 'react';
import './Weather.scss'
import { FaSearch, FaWind } from "react-icons/fa";
import { MdOutlineWaves } from "react-icons/md";


const Weather = () => {

    const [weather, setWeather] = useState(false)
    const [value, setValue] = useState()

    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
            const resp = await fetch(url)
            const data = await resp.json()
            console.log(data);
            setWeather({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                visibility: data.visibility,
                temparature: data.main.temp,
                place: data.name,
            })
        } catch (error) {
            console.log(error);
        }
    }
    const handleSub = (e) => {
        e.preventDefault()
        search(value)
        setValue('')
    }
    const date = new Date();

    const dateOnly = date.toLocaleDateString()

    return (
        <div className="weather-container">
            <div className="weather-card">
                <form onSubmit={handleSub}>
                    <input onChange={(e) => setValue(e.target.value)} value={value} className='search' type="text" placeholder='Serach city name' name="" id="" />
                    <button className='subBtn' type='submit'><FaSearch />                    </button>
                </form>
                {weather && (<div>
                    <div className="temperature">{Math.ceil(weather.temparature)}°<span>C</span></div>
                    <div className='maincity'>
                        <div className="city">{weather.place}</div>
                        <div className="date">{dateOnly}</div>
                    </div>
                    <div className="details">
                        <div className="detail">
                            <div className="label"><FaWind />
                                Wind</div>
                            <div className="value">{weather.windSpeed} km/h</div>
                        </div>
                        <div className="detail">
                            <div className="label"><MdOutlineWaves />

                                Humidity</div>
                            <div className="value">{weather.humidity}%</div>
                        </div>
                    </div>
                </div>)}

            </div>
        </div>
    );
};

export default Weather;
