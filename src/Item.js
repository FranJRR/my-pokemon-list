import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import Details from './Details';

export default function Item(props) {
  const { name, url } = props;
  const r = /pokemon\/(\d*)/;
  const [, pokemonId] = url.match(r);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Details url={url} />
        <img src={imageUrl} />
      </Card.Body>
    </Card>
  );
}
