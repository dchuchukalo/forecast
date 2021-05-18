import axios from 'axios';
import {
  fetchForecastRequest,
  fetchForecastSuccess,
  fetchForecastError,
} from './forecast-actions';

const key = 'bad46dfee1ae1125ec4faf31e63449de';
axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/';

export const fetchForecast = city => async dispatch => {
  dispatch(fetchForecastRequest());

  try {
    const { data } = await axios.get(`/forecast?q=${city}&appid=${key}`);

    dispatch(fetchForecastSuccess(data));
  } catch (error) {
    dispatch(fetchForecastError(error.message));
  }
};
