import React from 'react';
import PropTypes from 'prop-types';
import Unicorn from './Unicorn';

function Unicorns({ unicorns }) {
  const unicornElements = unicorns.map(unicorn => (
    <li key={unicorn.name}>
      <Unicorn unicorn={unicorn} />
    </li>
  ));

  return (
    <ul>
      {unicornElements}
    </ul>
  );
}

Unicorns.propTypes = {
  unicorns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }))
};

export default Unicorns;
