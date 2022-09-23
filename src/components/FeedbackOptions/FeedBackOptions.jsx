// import { Component } from 'react';
import css from './FeedbackOptions.module.css';

// class FeedbackOptions extends Component {
//   render() {
//     return (
//       <div className={css.btnWrapper}>
//         {this.props.options.map(option => (
//           <button>{option}</button>
//         ))}
//         <button>Good</button>
//         <button>Neutral</button>
//         <button>Bad</button>
//       </div>
//     );
//   }
// }

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
