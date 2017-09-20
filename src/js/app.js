// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Reducers
import appData from './reducers/appData';

// Components
import Main from './components/main';

const store = createStore(appData, window.devToolsExtension ? window.devToolsExtension() : f => f);

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
