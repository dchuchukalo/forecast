import Search from '../Search/Search';
import Loader from '../Loader/Loader';
import Recharts from '../Recharts/Recharts';
import { getIsLoading } from '../../redux/global/global-selectors';
import {
  getForecastData,
  getForecastError,
} from '../../redux/forecast/forecast-selectors';
import { connect } from 'react-redux';
import './App.styles.scss';

const App = ({ isLoading, data, error }) => {
  return (
    <div className="App">
      <div className="App__container">
        <Search />
        <Recharts data={data} error={error} />
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  data: getForecastData(state),
  error: getForecastError(state),
});

export default connect(mapStateToProps)(App);
