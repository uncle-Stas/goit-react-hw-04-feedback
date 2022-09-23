import css from './FeedbackOptions.module.css';

import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnWrapper}>
      {options.map(option => (
        <button
          type="button"
          key={option}
          name={option}
          className={css.feedbackBtn}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

// ------------------ PropTypes -------------------------

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
