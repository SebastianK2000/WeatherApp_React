import '../styles/Weather.css'
import search_icon from '../assets/search.svg'
import cloud_icon from '../assets/cloud.svg'
import drizzle_icon from '../assets/drizzle.svg'
import humidity_icon from '../assets/humidity.svg'
import rain_icon from '../assets/rain.svg'
import snow_icon from '../assets/snow.svg'
import sun_icon from '../assets/sun.svg'
import wind_icon from '../assets/wind.svg'
import { useEffect, useState, useRef } from 'react'

const Weather = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    const [weatherData, setWeatherData] = useState<{ humidity: number, windSpeed: number, temperature: number, location: string, icon: string } | false>(false);

    const allIcons: { [key: string]: string } = {
        "01d": sun_icon,
        "01n": sun_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
    }

    const search = async (city: any) => {

        if(city === ""){
            alert("Please enter a city name")
            return;
        } 

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=
            ${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

            const response = await fetch(url);
            const data = await response.json();

            const icon = allIcons[data.weather[0].icon] || sun_icon;

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })

        } catch (error) {
            setWeatherData(false);
            console.error("Error fetching weather data");
            alert("City not found");
        }
    }

    // Add event listener for Enter key
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            search(inputRef.current?.value);
        }
    }    

    useEffect(() => {
        search('California');

        const inputElement = inputRef.current;
        inputElement?.addEventListener('keydown', handleKeyDown);

        return () => {
            inputElement?.removeEventListener('keydown', handleKeyDown);
        }

    },[])

  return (
    <div className="weather">
        <div className="search-bar">
            <input ref={inputRef} type="text" placeholder="Search" />
            <img className="search-icon" src={search_icon} alt="magnifer" onClick={()=>search(inputRef.current?.value)} />
        </div>

        {weatherData?<>
        {weatherData && <img src={weatherData.icon} alt="Clear weather" className="weather-icon" />}
        {weatherData && <p className="temperature">{weatherData.temperature}°C</p>}
        {weatherData && <p className="location">{weatherData.location}</p>}
        <div className='weather-data'>

            <div className='col'>
                <img className='icon-water-wind' src={humidity_icon} alt="humidity icon" />
                <div>
                    {weatherData && <p>{weatherData.humidity} %</p>}
                    <span>Humidity</span>
                </div>
            </div>

            <div className='col'>
                <img className='icon-water-wind' src={wind_icon} alt="wind icon" />
                <div>
                    {weatherData && <p>{weatherData.windSpeed} Km/h</p>}
                    <span>Wind Speed</span>
                </div>
            </div>

        </div>
        </>:<></>}

    </div>
  )
}

export default Weather
