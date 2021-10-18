import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Greeting from './components/Greetings';

import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <div className="Main">
        <Nav />
        <Provider store={store}>
          <Greeting />
        </Provider>
      </div>
    </div>
  );
}

export default App;
