import React, { useState } from "react";

const Card = () => {
  const [city, setCity] = useState();
  const [search, setSearch] = useState("Patna");


  const exeCut = () => {
    const fetchApi = async () => {
      const key = "a6ade628632a99184fefa73b3955d814";
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}`;
      const response = await fetch(url);
      const respoJson = response.json();
      setCity(respoJson.main);
    };
    fetchApi();
  };

  return (
    <>
      <div className="inputField">
        <input
          type="text"
          className="input"
          placeholder="City Name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={exeCut}>click</button>
      </div>
      {!city ? (
        <p>no data found</p>
      ) : (
        <>
          <div className="downField">
            <i className="fa fa-times" aria-hidden="true"></i>
            <h1 className="cityName">{search}</h1>
            <h2>{city.temp}</h2>
            <p className="maxMin">
              max: {city.temp_max} &deg;C || min : {city.temp_min} &deg;C
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Card;
