import Search from '../Search/Search';
import Loader from '../Loader/Loader';
import { getIsLoading } from '../../redux/global/global-selectors';
import { connect } from 'react-redux';
import './App.scss';

const App = ({ isLoading }) => {
  return (
    <div className="App">
      <div className="App__container">
        <Search />
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

export default connect(mapStateToProps)(App);
