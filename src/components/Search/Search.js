import React from 'react';
import { connect } from 'react-redux';
import { onChangeInput } from '../../redux/forecast/forecast-actions';
import { fetchForecast } from '../../redux/forecast/forecast-operations';
import {
  getSearchQuery,
  getForecastData,
} from '../../redux/forecast/forecast-selectors';
import './Search.scss';

const Search = ({ searchQuery, onChangeInput, onSearch }) => {
  const handleChangeInput = e => {
    onChangeInput(e.target.value);
  };

  const handleSearchForecast = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="Search">
      <input
        className="Search__input"
        type="text"
        placeholder="City name"
        value={searchQuery}
        onChange={handleChangeInput}
      />
      <button onClick={handleSearchForecast}>Search</button>
    </div>
  );
};

const mapStateToProps = state => ({
  searchQuery: getSearchQuery(state),
  forecastData: getForecastData(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: value => dispatch(onChangeInput(value)),
  onSearch: city => dispatch(fetchForecast(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
