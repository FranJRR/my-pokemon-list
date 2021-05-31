import React from 'react';

export default function Info(props) {
  const { name, sprites, types, height, weight } = props.pokemon;

  return (
    <>
      <h1>{name}</h1>
      <img src={sprites.front_default} />
      <img src={sprites.back_default} />
      <ul>
        {types.map(({ type }) => {
          return <li>{type.name}</li>;
        })}
      </ul>
      <p>{height / 10} metros</p>
      <p>{weight / 10} kg</p>
    </>
  );
}
