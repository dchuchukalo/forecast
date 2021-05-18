import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as forecastActions from '../forecast/forecast-actions';

const isLoading = createReducer(false, {
  [forecastActions.fetchForecastRequest]: () => true,
  [forecastActions.fetchForecastSuccess]: () => false,
  [forecastActions.fetchForecastError]: () => false,
});

export const globalReducer = combineReducers({
  isLoading,
});
