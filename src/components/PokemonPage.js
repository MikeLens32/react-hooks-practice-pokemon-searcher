import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then((pokemonData) => {
      setPokemons(pokemonData)
    }) .catch((err) => {
      alert(err)
    })
  }, [])

  function handleNewPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon])
  }

  const pokemonDisplayed = pokemons.filter((pokemon) => 
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleNewPokemon}/>
      <br />
      <Search  term={search} onChangeTerm={setSearch}/>
      <br />
      <PokemonCollection pokemon={pokemonDisplayed}/>
    </Container>
  );
}

export default PokemonPage;
