import logo from './logo.svg';
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Rockets from './components/Rockets/Rockets';

import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <div className="Main">
        <Nav />
        <Switch>
        </Switch>
      </div>
    </div>
  );
}

export default App;