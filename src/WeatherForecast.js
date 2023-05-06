import React from "react";
import "./App.css";

export default function WeatherForecast() {
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
