import React, { useState } from 'react';

import { Form, Col, Button } from 'react-bootstrap';

import Item from './Item';
import Details from './Details';
import Info from './Info';

export default function Search() {
  const [input, setInput] = useState('');
  const [pokemon, setPokemon] = useState({});

  const onFormSubmit = e => {
    e.preventDefault();
    //console.log(input);

    const getPoke = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${input}/`;
      const response = await fetch(url);
      const result = await response.json();
      //console.log(JSON.stringify(result, null, 2));
      setPokemon({ ...pokemon, ...result, name: input, url });
    };

    getPoke();
  };

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <Form.Row className="align-items-center">
          <Col className="my-1">
            <Form.Label htmlFor="inlineFormInputName" srOnly>
              Pokemon
            </Form.Label>
            <Form.Control
              id="inlineFormInputName"
              placeholder="Search a pokemon here ..."
              onChange={e => setInput(e.target.value)}
            />
          </Col>
          <Col xs="auto" className="my-1">
            <Button
              type="submit"
              onClick={() => {
                console.log('sent');
              }}
            >
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
      {pokemon.name && <Info pokemon={pokemon} />}
    </>
  );
}
//https://pokeapi.co/api/v2/pokemon/{id or name}/
