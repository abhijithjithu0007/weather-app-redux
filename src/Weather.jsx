import React, { useEffect, useState } from 'react';
import './Weather.scss'

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
        console.log(value);
    }

    return (
        <div className="weather-container">
            <div className="weather-card">
                <form onSubmit={handleSub}>
                    <input onChange={(e) => setValue(e.target.value)} className='search' type="text" placeholder='Serach city name' name="" id="" />
                    <button type='submit'>Search</button>
                </form>
                {weather && (<div>
                    <div className="icon">
                        <svg className="svg-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                        </svg>
                    </div>
                    <div className="temperature">{Math.ceil(weather.temparature)}°<span>C</span></div>
                    <div className='maincity'>
                        <div className="city">{weather.place}</div>
                        <div className="date">Thursday 10</div>
                    </div>
                    <div className="details">
                        <div className="detail">
                            <div className="label">Wind</div>
                            <div className="value">{weather.windSpeed}</div>
                        </div>
                        <div className="detail">
                            <div className="label">Humidity</div>
                            <div className="value">{weather.humidity}</div>
                        </div>
                        <div className="detail">
                            <div className="label">Visibility</div>
                            <div className="value">{weather.visibility}</div>
                        </div>
                    </div>
                </div>)}

            </div>
        </div>
    );
};

export default Weather;
