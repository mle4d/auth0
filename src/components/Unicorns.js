import React from 'react';
import PropTypes from 'prop-types';
import Unicorn from './Unicorn';

function Unicorns({ unicornss }) {
  const unicornElements = unicorns.map(unicorn => (
    <li key={unicorn.name}>
      <Unicorn unicorn={unicorn} />
    </li>
  ));

  return (
    <ul>
      {unicronElements}
    </ul>
  );
}

Unicorns.propTypes = {
  unicorns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired
};

export default Unicorns;
