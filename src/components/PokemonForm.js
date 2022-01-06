import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {

  const [formInfo, setFormInfo] = useState({
    name: '',
    hp: '',
    frontUrl:'',
    backUrl:'',
  })

  function handleChange(e) {
    setFormInfo({
      ...formInfo,
      [e.target.name]:e.target.value,
    })
  }

  function handleSubmit() {
    // e.preventdefault()
    const newPokemon = {
      name: formInfo.name,
      hp: formInfo.hp,
      Sprites: {
        front: formInfo.frontUrl,
        back: formInfo.backUrl,
      }
    }
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json', 
      }, body: JSON.stringify(newPokemon),
    })
    .then(r => r.json())
    .then((onAddPokemon))
    .catch((err) => {
      console.err('ERROR:', err)
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={formInfo.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={formInfo.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formInfo.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formInfo.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
