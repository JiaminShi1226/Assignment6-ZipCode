import React, { useState } from "react";
import axios from "axios";

const ZipAPI = (props) => {
  const [zips, setZips] = useState("");
  const [vals, setVals] = useState("");

  console.log(zips);

  async function getZips() {
    try {
      const URL = `https://zip-api.eu/api/v1/info/${vals}`;
      const response = await axios.get(URL);
      setZips(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(zips);
  const handleSubmit = (event) => {
    getZips(vals);
    event.preventDefault();
  };
  return (
    <div>
      <h1>{props.title}</h1>
      <form>
        <input
          placeholder="Enter Zipcode"
          onChange={(e) => setVals(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Search</button>
      </form>
      <div>
        <p>Country: {zips.country_code}</p>
        <p>Postal Code: {zips.postal_code}</p>
        <p>State: {zips.state}</p>
        <p>Place Name: {zips.place_name}</p>
        <p>Latitude: {zips.lat}</p>
        <p>Longitude: {zips.lng}</p>
      </div>
    </div>
  );
};

export default ZipAPI;
