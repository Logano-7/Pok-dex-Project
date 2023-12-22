import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  filterByName,
  filterByType,
  filterByWeakness,
} from "../Helpers/pokemon.helpers";

function LibraryPage() {
  const [Pokemon, setPokemon] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [filterWeakness, setFilterWeakness] = useState("All");
  const [search, setSearch] = useState([]);

  const fetchURL =
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
  useEffect(() => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.pokemon);
      })
      .catch((err) => console.log(err));
  }, []);

  function filterPokemon() {
    let filteredPokemonList = [];
    if (filterType === "All" && filterWeakness === "All" && search === "") {
      filteredPokemonList = Pokemon;
      return filteredPokemonList;
    } else if (search !== "") {
      filteredPokemonList = filterByName(Pokemon, search);
      return filteredPokemonList;
    } else if (filterType !== "All" && filterWeakness !== "All") {
      filteredPokemonList = filterByType(Pokemon, filterType);
      filteredPokemonList = filterByWeakness(
        filteredPokemonList,
        filterWeakness
        );
        console.log(filteredPokemonList);
        return filteredPokemonList;
      } else if (filterType !== "All") {
        filteredPokemonList = filterByType(Pokemon, filterType);
        return filteredPokemonList;
      } else if (filterWeakness !== "All") {
        filteredPokemonList = filterByWeakness(Pokemon, filterWeakness);
        return filteredPokemonList;
      } else {
        return filteredPokemonList;
    }
  }
  const filteredPokeList = filterPokemon();


  return (
    <>
      <form className="searchBar">
        <input type="text" placeholder="Search Pokemon" />
        <button type="submit">
          Submit
        </button>
      </form>

      <div className="filterBar">
        <h3>Filter By:</h3>
        <div className="filterBarType">
          <h4>Type</h4>
          <select
            name="filterType"
            id="filterType"
            onChange={(e) => setFilterType(e.target.value)}
          >
           <option value="All">All</option>
            <option value="Grass">Grass</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Bug">Bug</option>
            <option value="Normal">Normal</option>
            <option value="Poison">Poison</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Fairy">Fairy</option>
            <option value="Fighting">Fighting</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Ghost">Ghost</option>
            <option value="Ice">Ice</option>
            <option value="Dragon">Dragon</option>
            <option value="Steel">Steel</option>
            <option value="Flying">Flying</option>
          </select>
        </div>
        <div className="filterBarWeakness">
          <h4>Weakness</h4>
          <select
            name="filterWeakness"
            id="filterWeakness"
            onChange={(e) => setFilterWeakness(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Grass">Grass</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Bug">Bug</option>
            <option value="Normal">Normal</option>
            <option value="Poison">Poison</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Fairy">Fairy</option>
            <option value="Fighting">Fighting</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Ghost">Ghost</option>
            <option value="Ice">Ice</option>
            <option value="Dragon">Dragon</option>
            <option value="Steel">Steel</option>
            <option value="Flying">Flying</option>
          </select>
        </div>
      </div>

      {filteredPokeList.map((pokemon) => (
        <div className="pokeListyCard" key={pokemon.id}>
          <Link to={`/library/${pokemon.id}`}>
            <img src={pokemon.img} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
          </Link>
          <p>#{pokemon.id}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Type: {pokemon.type.join(", ")}</p>
          <p>Weaknesses: {pokemon.weaknesses.join(", ")}</p>
        </div>
      ))}
    </>
  );
}

export default LibraryPage;
