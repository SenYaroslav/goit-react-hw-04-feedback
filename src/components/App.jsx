import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    const positivePercentage = ((good / total) * 100).toFixed(0);
    return positivePercentage;
  };

  onLeaveFeedback = e => {
    const targetState = e.currentTarget.name;
    this.setState(prevState => ({
      [targetState]: prevState[targetState] + 1,
    }));
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {totalFeedback === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
