import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {

  const cards = pokemon.map((poke) => (
    <PokemonCard key={poke.id} name={poke.name} hp={poke.hp} sprites={poke.sprites} />
  ))

  return (
    <Card.Group itemsPerRow={6}>
      {cards.length > 0 ? cards : "No Pokemon Available" }
    </Card.Group>
  );
}

export default PokemonCollection;
