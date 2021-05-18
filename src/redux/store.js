import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { forecastReducer } from './forecast/forecast-reducer';
import { globalReducer } from './global/global-reducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    counter: forecastReducer,
    global: globalReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
