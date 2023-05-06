import React from "react";

export default function WeatherForecast() {
  return (
    <div class="col futuredays">
      <div class="day">Saturday</div>
      <div class="icon">
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
