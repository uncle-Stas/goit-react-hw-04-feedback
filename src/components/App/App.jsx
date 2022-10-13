import { useState } from 'react';

import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedBackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [state, setState] = useState(initialState);

  const addFeedback = event => {
    const targetName = event.currentTarget.name;

    setState(prevState => ({
      ...prevState,
      [targetName]: prevState[targetName] + 1,
    }));
  };

  const calcTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const calcPositivePercentage = total => {
    return Math.round((state.good / total) * 100);
  };

  const optionsArr = Object.keys(state);
  const total = calcTotalFeedback();
  const positivePercentage = calcPositivePercentage(total);

  return (
    <>
      <Section sectionTitle="Please leave feedback">
        <FeedbackOptions options={optionsArr} onLeaveFeedback={addFeedback} />
      </Section>
      <Section sectionTitle="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            dataStats={state}
            options={optionsArr}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
}

export default App;
