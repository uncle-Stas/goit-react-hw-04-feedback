import css from './Statistics.module.css';

import PropTypes from 'prop-types';

const Statistics = ({ dataStats, options, total, positivePercentage }) => {
  return (
    <ul className={css.statsList}>
      {options.map(option => {
        return (
          <li key={option} className={css.statsItem}>
            {option}: {dataStats[option]}
          </li>
        );
      })}
      <li className={css.statsItem}>Total: {total}</li>
      <li className={css.statsItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

export default Statistics;

// ------------------ PropTypes -------------------------

Statistics.propTypes = {
  dataStats: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
