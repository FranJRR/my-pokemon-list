import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function Details(props) {
  const [show, setShow] = useState(false);
  const [pokemon, setPokemon] = useState();

  const handleClose = () => setShow(false);

  const getPokemon = () => {
    const { url } = props;
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      console.log('Result:', JSON.stringify(result, null, 2));
      setPokemon(result);
      setShow(true);
    };
    fetchData();
  };

  return (
    <>
      <Button variant="primary" onClick={getPokemon}>
        Ver Shiny
      </Button>

      {pokemon && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{pokemon.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={pokemon.sprites.front_shiny} />
            <img src={pokemon.sprites.back_shiny} />
            <ul>
              {pokemon.types.map(({ type }) => {
                return <li>{type.name}</li>;
              })}
            </ul>
            <p>{pokemon.height / 10} metros</p>
            <p>{pokemon.weight / 10} kg</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
