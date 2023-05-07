import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDate();

    let days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];

    return days[day];
  }

  let iconURL = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  return (
    <div className="WeatherForecastDay">
      <div className="futuredays">
        <div className="day">{day()}</div>
        <div className="icon">
          <img src={iconURL} width="60" alt="" />
        </div>
        <div class="temp">
          <span>{maxTemp()}</span>°/
          <span>{minTemp()}</span>°
        </div>
      </div>
    </div>
  );
}
