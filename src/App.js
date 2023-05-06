import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./App.css";
import { Oval } from "react-loader-spinner";

function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "6a48a550fc04f170639e60d52b8a6bc5";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="box">
          <div className="container">
            <div>
              <form action="search" onSubmit={handleSubmit}>
                <div className="col input-group">
                  <input
                    type="search"
                    placeholder="Change location"
                    className="searchbar"
                    autocomplete="off"
                    onChange={handleCityChange}
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
          <span> by Donya Davoudi</span>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="App">
        <div className="box">
          <div className="container">
            <div>
              <form action="search" onSubmit={handleSubmit}>
                <div className="col input-group">
                  <input
                    type="search"
                    placeholder="Change location"
                    className="searchbar"
                    autocomplete="off"
                    onChange={handleCityChange}
                  />
                  <button type="submit" className="button">
                    <i className="fa-solid fa-magnifying-glass glassicon"></i>
                  </button>
                </div>
              </form>
              <div className="loader-spinner">
                {" "}
                <Oval
                  height={80}
                  width={80}
                  color="#ec6e4c"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#ec6e4c"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                  className="loader-spinner"
                />
              </div>
            </div>
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
          <span>by Donya Davoudi</span>
        </div>
      </div>
    );
  }
}
export default App;
