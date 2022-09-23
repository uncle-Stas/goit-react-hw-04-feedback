import { Component } from 'react';
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

const FeedbackOptions = ({ options }) => {
  console.log(options);
  return (
    <div className={css.btnWrapper}>
      {options.map(option => (
        <button>{option}</button>
      ))}
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </div>
  );
};

export default FeedbackOptions;
