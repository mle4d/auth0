import React from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '../components/Auth0Provider';

function Unicorn({ unicorn }) {
  const { isAuthenticated, loading, user } = useAuth0();
  return (
    <>
      <p>owner - {isAuthenticated && !loading ? user.nickname : 'unknown'}</p>
      <p>{unicorn.name}</p>
    </>
  );
}

Unicorn.propTypes = {
  unicorn: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Unicorn;
