import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from './reducers';

import App from './App';
import './index.css';
// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
