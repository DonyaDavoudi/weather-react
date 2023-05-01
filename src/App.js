import "./App.css";

function App() {
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
                <span id="maincityname">Tehran </span>
              </div>

              <div className="maincitytemp">
                <span id="maincitytempnum">19</span>
                <span>°C</span>
                <span id="description"> Clear</span>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 maininfo">
              <div className="humidity">
                Humidity: <span id="humidity">61</span>%
              </div>
              <div className="wind">
                Wind: <span id="wind">0</span>Km/H
              </div>
            </div>
            <div className="col-xxl-3 co-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mainicon">
              <img
                id="mainicon"
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt=""
              />
            </div>
          </div>
          <div id="forecast"></div>
          <div id="last-update">
            Last updated: <span id="date">Sunday 17:39</span>
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
}

export default App;
