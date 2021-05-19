import React from 'react';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import moment from 'moment';
import './Recharts.styles.scss';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Recharts = ({ data, error }) => {
  const normalizeData = data?.list.map(({ dt, main: { temp } }) => {
    const normalizeUtc = dt * 1000;

    return {
      date: moment.utc(normalizeUtc).format('MMM Do'),
      time: moment.utc(normalizeUtc).format('HH:mm'),
      temperature: temp,
    };
  });

  return (
    <div className="Recharts" width="100%" height="100%">
      {!!data && (
        <>
          <h2>{data.city.name}</h2>
          <ResponsiveContainer className="Recharts__container">
            <BarChart
              width={500}
              height={200}
              data={normalizeData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="temperature" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
      {!!error && <p>{error}</p>}
    </div>
  );
};

export default Recharts;
