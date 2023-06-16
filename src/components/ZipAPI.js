import React, { useEffect, useState } from "react";
import axios from "axios";

const ZipAPI = (props) => {
  const [zips, setZips] = useState({});

  console.log(zips);

  useEffect(() => {
    async function getZips() {
      try {
        const URL = `https://zip-api.eu/api/v1/info/${zips}`;
        const response = await axios.get(URL);
        setZips(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getZips();
  }, [zips]);
  console.log(zips);
  return (
    <div>
      <h1>{props.title}</h1>
      <form>
        <input
          value={zips}
          placeholder="Enter Zipcode"
          onChange={(e) => setZips(e.target.value)}
        ></input>
        <button>Search</button>
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
