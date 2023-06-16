import React, { useEffect, useState } from "react";
import axios from "axios";

const DistanceAPI = (props) => {
  const [zip1, setZip1] = useState({});
  const [zip2, setZip2] = useState({});
  const [distancee, setDistance] = useState({});

  console.log(zips);

  useEffect(() => {
    async function getDistance() {
      try {
        const URL = `https://zip-api.eu/api/v1/distance/US-${zip1}/US-${zip2}/mi`;
        const response = await axios.get(URL);
        setZips(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDistance();
  }, [zips]);
  console.log(zips);
  
  return (
    <div>
      <h1>{props.title}</h1>
      <form>
        <input
          value={zip1}
          placeholder="Enter Zipcode"
          onChange={(e) => setZip1(e.target.value)}
        ></input>
        <input
          value={zip2}
          placeholder="Enter Zipcode"
          onChange={(e) => setZip2(e.target.value)}
        ></input>
        <button>Search</button>
      </form>
      <div>
        <p>Country: {distancee.distance}</p>
      </div>
    </div>
  );
};

export default DistanceAPI;
