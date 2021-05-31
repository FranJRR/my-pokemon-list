import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import Item from './Item';
import './List.css';

export default function List() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${page *
      itemsPerPage}`;
    const getItems = async () => {
      //const result = await fetch(url).then(r => r.json());
      const response = await fetch(url);
      const result = await response.json();
      console.log(JSON.stringify(result.results, null, 2));
      setItems(result.results);
    };
    getItems();
  }, [page]);

  return (
    <>
      <h3>Estas en la página {page}</h3>
      <Button variant="secondary" onClick={() => setPage(page - 1)}>
        Anterior
      </Button>
      <Button variant="secondary" onClick={() => setPage(page + 1)}>
        Siguiente
      </Button>
      <div className="container">
        {items.map(({ name, url }) => {
          return <Item name={name} url={url} />;
        })}
      </div>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </>
  );
}
