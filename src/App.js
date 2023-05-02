import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
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
            <div className="row maincity">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                <div className="maincitynamepin">
                  <i className="fa-solid fa-map-pin pin"></i>
                  <span id="maincityname">{weatherData.city}</span>
                </div>

                <div className="maincitytemp">
                  <span id="maincitytempnum">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span>°C</span>
                  <span id="description" className="text-capitalize">
                    {" "}
                    {weatherData.description}
                  </span>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 maininfo">
                <div className="humidity">
                  Humidity: <span id="humidity">{weatherData.humidity}</span>%
                </div>
                <div className="wind">
                  Wind: <span id="wind">{weatherData.wind}</span>Km/H
                </div>
              </div>
              <div className="col-xxl-3 co-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mainicon">
                <img id="mainicon" src={weatherData.iconUrl} alt="" />
              </div>
            </div>
            <div id="forecast"></div>
            <div id="last-update">
              Last updated:{" "}
              <span id="date">
                <FormattedDate date={weatherData.date} />
              </span>
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
