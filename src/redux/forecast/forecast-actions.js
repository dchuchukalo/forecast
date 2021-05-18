import { createAction } from '@reduxjs/toolkit';

export const onChangeInput = createAction('forecast/changeInput');

export const fetchForecastRequest = createAction('forecast/fetchRequest');
export const fetchForecastSuccess = createAction('forecast/fetchSuccess');
export const fetchForecastError = createAction('forecast/fetchError');
