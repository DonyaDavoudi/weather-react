import React from "react";
import axios from "axios";
import "./App.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "6a48a550fc04f170639e60d52b8a6bc5";
  let longtitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;

  axios.get(apiURL).then(handleResponse);

  return (
    <div class="col futuredays">
      <div className="day">Saturday</div>
      <div className="icon">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          width="60"
        />
      </div>
      <div class="temp">
        <span>12</span>°/
        <span>16</span>°
      </div>
    </div>
  );
}
