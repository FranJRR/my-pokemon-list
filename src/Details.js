import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function Details(props) {
  const [show, setShow] = useState(false);
  const [pokemon, setPokemon] = useState();
  const [shiny, setShiny] = useState(false);

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

  const toggleShiny = () => {
    setShiny(!shiny);
  };

  return (
    <>
      <Button variant="primary" onClick={getPokemon}>
        Ver detalle
      </Button>

      {pokemon && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{pokemon.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {shiny ? (
              <>
                <img src={pokemon.sprites.front_shiny} />
                <img src={pokemon.sprites.back_shiny} />
              </>
            ) : (
              <>
                <img src={pokemon.sprites.front_default} />
                <img src={pokemon.sprites.back_default} />
              </>
            )}
            <ul>
              {pokemon.types.map(({ type }) => {
                return <li>{type.name}</li>;
              })}
            </ul>
            <p>{pokemon.height / 10} metros</p>
            <p>{pokemon.weight / 10} kg</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="link" onClick={toggleShiny}>
              {shiny ? 'Normal' : 'Shiny'}
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
