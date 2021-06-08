import React, { useState, useEffect } from 'react';
import { Modal, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';

export default function Details(props) {
  const [show, setShow] = useState(false);
  const [pokemon, setPokemon] = useState();
  const [shiny, setShiny] = useState(false);
  const [female, setFemale] = useState(false);

  const handleClose = () => setShow(false);

  const getPokemon = () => {
    const { url } = props;
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      //console.log('Result:', JSON.stringify(result, null, 2));
      setPokemon(result);
      setShow(true);
    };
    fetchData();
  };

  const toggleShiny = () => {
    setShiny(!shiny);
  };

  const toggleGender = e => {
    setFemale(e.currentTarget.value === 'true');
    console.log('Gender', e.currentTarget.value === 'true');
  };

  const radios = [
    { name: '🍌', value: false, variant: 'primary' },
    { name: '🌰', value: true, variant: 'danger' }
  ];

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
            <div class="pokedex">
              {shiny ? (
                female && pokemon.sprites.front_shiny_female ? (
                  <>
                    <img src={pokemon.sprites.front_shiny_female} />
                    <img src={pokemon.sprites.back_shiny_female} />
                  </>
                ) : (
                  <>
                    <img src={pokemon.sprites.front_shiny} />
                    <img src={pokemon.sprites.back_shiny} />
                  </>
                )
              ) : female && pokemon.sprites.front_female ? (
                <>
                  <img src={pokemon.sprites.front_female} />
                  <img src={pokemon.sprites.back_female} />
                </>
              ) : (
                <>
                  <img src={pokemon.sprites.front_default} />
                  <img src={pokemon.sprites.back_default} />
                </>
              )}
            </div>
            <ul>
              {pokemon.types.map(({ type }) => {
                return <li>{type.name}</li>;
              })}
            </ul>
            <p>{pokemon.height / 10} metros</p>
            <p>{pokemon.weight / 10} kg</p>
          </Modal.Body>
          <Modal.Footer>
            <ButtonGroup toggle>
              {radios.map(
                (radio, idx) =>
                  (!radio.value ||
                    (radio.value &&
                      (pokemon.sprites.front_female ||
                        pokemon.sprites.front_shiny_female))) && (
                    <ToggleButton
                      key={idx}
                      type="radio"
                      variant={radio.variant}
                      value={radio.value}
                      checked={female === radio.value}
                      onChange={e => toggleGender(e)}
                    >
                      {radio.name}
                    </ToggleButton>
                  )
              )}
            </ButtonGroup>
            <a class="rainbow shiny" onClick={toggleShiny}>
              {shiny ? 'Normal' : 'Shiny'}
            </a>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
