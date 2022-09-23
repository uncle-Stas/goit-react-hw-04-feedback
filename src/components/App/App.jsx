import { Component } from 'react';

import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedBackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    const targetName = event.currentTarget.name;
    this.setState(prevState => ({
      [targetName]: prevState[targetName] + 1,
    }));
  };

  calcTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  calcPositivePercentage = total => {
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const optionsArr = Object.keys(this.state);
    const total = this.calcTotalFeedback();
    const positivePercentage = this.calcPositivePercentage(total);

    return (
      <>
        <Section sectionTitle="Please leave feedback">
          <FeedbackOptions
            options={optionsArr}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section sectionTitle="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              dataStats={this.state}
              options={optionsArr}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
