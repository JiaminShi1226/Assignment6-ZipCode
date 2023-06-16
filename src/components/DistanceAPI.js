import React, { useEffect, useState } from "react";
import axios from "axios";

const DistanceAPI = (props) => {
  const [zip1, setZip1] = useState({});
  const [zip2, setZip2] = useState({});
  const [distancee, setDistance] = useState(0);

  console.log(distancee);
  async function getDistance() {
    try {
      const URL = `https://zip-api.eu/api/v1/distance/US-${zip1}/US-${zip2}/mi`;
      const response = await axios.get(URL);
      setDistance(response.data.distance);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(distancee);
  const handleSubmit = (event) => {
    getDistance(zip1, zip2);
    event.preventDefault();
  };
  return (
    <div>
      <h1>{props.title}</h1>
      <form>
        <input
          placeholder="Enter Zipcode"
          onChange={(e) => setZip1(e.target.value)}
        ></input>
        <input
          placeholder="Enter Zipcode"
          onChange={(e) => setZip2(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Search</button>
      </form>
      <div>
        <p>Distance: {Number(distancee).toFixed(2)} mi </p> 
      </div>
    </div>
  );
};

export default DistanceAPI;
