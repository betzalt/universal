import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducers } from './state';
import App from './components/App';

const store = applyMiddleware(thunk)(createStore)(reducers);

injectTapEventPlugin();
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('react-root'));
