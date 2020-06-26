import React from 'react';
import './Champs.css';

const champs = (props) => {
  return (
    <img
      src={props.images}
      alt={props.list}
      className={'All ' + props.list}
      width="60px"
      id={props.index}
      onMouseEnter={props.entered}
      onMouseLeave={props.left}
    />
  );
};

export default champs;
