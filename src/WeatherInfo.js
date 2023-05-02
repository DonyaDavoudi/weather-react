import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row maincity">
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
          <div className="maincitynamepin">
            <i className="fa-solid fa-map-pin pin"></i>
            <span id="maincityname">{props.data.city}</span>
          </div>

          <div className="maincitytemp">
            <span id="maincitytempnum">
              {Math.round(props.data.temperature)}
            </span>
            <span>°C</span>
            <span id="description" className="text-capitalize">
              {" "}
              {props.data.description}
            </span>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 maininfo">
          <div className="humidity">
            Humidity: <span id="humidity">{props.data.humidity}</span>%
          </div>
          <div className="wind">
            Wind: <span id="wind">{Math.round(props.data.wind)}</span>Km/H
          </div>
        </div>
        <div className="col-xxl-3 co-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mainicon">
          <img id="mainicon" src={props.data.iconUrl} alt="" />
        </div>
      </div>
      <div id="forecast"></div>
      <div id="last-update">
        Last updated:{" "}
        <span id="date">
          <FormattedDate date={props.data.date} />
        </span>
      </div>
    </div>
  );
}
