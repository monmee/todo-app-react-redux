import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ isActive, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={isActive}
    style={{
      marginLeft: '4pt'
    }}
  >
    {children}
  </button>
);

Link.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link;