import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './forecast-actions';

const searchQuery = createReducer('', {
  [actions.onChangeInput]: (_, { payload }) => payload,
  [actions.fetchForecastSuccess]: () => '',
});

const forecastData = createReducer(null, {
  [actions.fetchForecastRequest]: () => null,
  [actions.fetchForecastSuccess]: (_, { payload }) => payload,
});

const forecastError = createReducer('', {
  [actions.fetchForecastRequest]: () => '',
  [actions.fetchForecastError]: (_, { payload }) => payload,
});

export const forecastReducer = combineReducers({
  searchQuery,
  forecastData,
  forecastError,
});
