import { connect } from 'react-redux';
import Unicorns from '../components/Unicorns';
import { getUnicorns } from '../selectors/unicornSelectors';

const mapStateToProps = state => ({
  unicorns: getUnicorns(state)
});

export default connect(
  mapStateToProps
)(Unicorns);
