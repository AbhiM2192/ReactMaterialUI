import { configureStore,getDefaultMiddleware  } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import itemsRootSaga from './sagas';
import itemsReducer from './reducers';

const sagaMiddleware = createSagaMiddleware()
const reducer = {
    item:itemsReducer
}
const middleware = [...getDefaultMiddleware(),sagaMiddleware]
const store = configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
  });
  sagaMiddleware.run(itemsRootSaga)
  
  export default store