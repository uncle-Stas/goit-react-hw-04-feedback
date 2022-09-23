import css from './Statistics.module.css';

const Statistics = ({ dataStats, options, total, positivePercentage }) => {
  return (
    <ul>
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
