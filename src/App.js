import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./App.css";

function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="box">
          <div className="container">
            <div>
              <form action="search">
                <div className="col input-group">
                  <input
                    type="search"
                    placeholder="Change location"
                    className="searchbar"
                    autocomplete="off"
                  />
                  <button type="submit" className="button">
                    <i className="fa-solid fa-magnifying-glass glassicon"></i>
                  </button>
                </div>
              </form>
            </div>
            <WeatherInfo data={weatherData} />
          </div>
        </div>
        <div id="moreInfo">
          <a
            id="srcLink"
            href="https://github.com/izeofdonya/Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Donya Davoudi
        </div>
      </div>
    );
  } else {
    const apiKey = "6a48a550fc04f170639e60d52b8a6bc5";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
export default App;
