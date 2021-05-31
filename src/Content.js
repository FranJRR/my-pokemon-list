import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from './List';
import Search from './Search';

export default function Content() {
  return (
    <Switch>
      <Route exact path="/" component={List} />
      <Route exact path="/search" component={Search} />
      <Route
        render={function() {
          return <p>Not found</p>;
        }}
      />
    </Switch>
  );
}
