import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const  createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware),
  (process.env.NODE_ENV !== 'production' ?  window.devToolsExtension() : f => f)
)(createStore);

export default function configureStores (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  store.runSage = sagaMiddleware.run;
  store.runSaga(rootSaga);
  return store;
}
