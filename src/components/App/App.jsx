import FeedbackOptions from 'components/FeedbackOptions/FeedBackOptions';
import { Section } from 'components/Section/Section';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const optionsArr = Object.keys(this.state);

    return (
      <>
        <Section sectionTitle="Please leave feedback">
          <FeedbackOptions options={optionsArr} />
        </Section>
      </>
    );
  }
}

export default App;
