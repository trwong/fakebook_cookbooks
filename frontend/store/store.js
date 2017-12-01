import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/root';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export default (preloadedState = {}) => createStore(
  rootReducer, preloadedState,
  applyMiddleware(thunk, middlewares)
  // composeWithDevTools(applyMiddleware(thunk, logger))
);