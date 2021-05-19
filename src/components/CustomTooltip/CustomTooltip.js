import React from 'react';
import './CustomTooltip.styles.scss';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="CustomTooltip">
        <p>{data.payload.time}</p>
        <p className="CustomTooltip__description">{data.value} C</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
