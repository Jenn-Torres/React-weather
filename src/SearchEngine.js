import "./styles.css";
import React, { useState } from "react";
import axios from "axios";

let apiKey = "1a2b7258ebd456c01aef9175dfe8b709";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeatherData);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeatherData(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  return (
    <div className="SearchEngine">
      <h1>Weather Search Engine</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <ul>
        <li> Temperature: {Math.round(temperature)} </li>
        <li> Description: {description} </li>
        <li> Humidity: {Math.round(humidity)} </li>
        <li> Wind: {Math.round(wind)} </li>
        <li>
          {" "}
          <img alt="" src={icon} />{" "}
        </li>
      </ul>
    </div>
  );
}
