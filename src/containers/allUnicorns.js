import { connect } from 'react-redux';
import Unicorns from '../components/Unicorns';
import { getUnicorn } from '../selectors/unicornSelector';

const mapStateToProps = state => ({
  unicorns: getUnicorn(state)
});

export default connect(
  mapStateToProps
)(Unicorns);
