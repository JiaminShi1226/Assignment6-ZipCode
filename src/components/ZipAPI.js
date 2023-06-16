import React, { useEffect, useState } from "react";
import axios from "axios";

const ZipAPI = (props) => {
  const [pokeListState, setPokeListState] = useState([]);
  // pokeList  === this.state.pokeList
  // setPokeList === this.state.pokeList

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const list = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokeListState(list.data.results);
        // this.setState(list.data.results)
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokemon();
  }, []);
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      {pokeListState.map((pokemon) => {
        return <p key={pokemon.url}>{pokemon.name}</p>;
      })}
    </div>
  );
};

export default ZipAPI;
