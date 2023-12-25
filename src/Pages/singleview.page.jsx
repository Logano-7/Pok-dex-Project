import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getTypeImages from "../Helpers/pokemon.helpers";

function PokeViewPage() {
  const [onePokemon, setOnePokemon] = useState({});
  const { id } = useParams();

  const fetchURL =
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
  function getOnePokemon() {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => {
        setOnePokemon(data.pokemon[id - 1]);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getOnePokemon();
  }, []);

  console.log(onePokemon);

  return (
    <>
      <div className="PokeView">
        <h1>{onePokemon.name}</h1>
        <img src={onePokemon.img} alt={onePokemon.name} />
        <div className="stats">
          <div className="measurables">
            <p>Height: {onePokemon.height}</p>
            <p>Weight: {onePokemon.weight}</p>
            <p>Egg: {onePokemon.egg}</p>
          </div>
          <div className="typesLists">
            <p>Types: {onePokemon.type}</p>
            <p>Weaknesses: {onePokemon.weaknesses}</p>
            <p>
              Next Evolution:{" "}
              {onePokemon["next_evolution"]
                ? onePokemon["next_evolution"][0].name
                : "None"}
            </p>
            <p>
              Previous Evolution:{" "}
              {onePokemon["prev_evolution"]
                ? onePokemon["prev_evolution"][0].name
                : "None"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokeViewPage;
