import React, { Component } from "react";
import  Notification  from "../Notification";
import FeedbackOptions from '../Feedback';
import Statistics from "../Statistics";
import  Section from "../Section";
export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  handleIncrement = (feedbackType) => {
    this.setState((prevState) => {
    return {
    ...prevState,
    [feedbackType]: prevState[feedbackType] + 1,
    };
    });
        
    }
    countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  
    countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrement} />
        </Section>
        
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              PositivePercentage={this.countPositiveFeedbackPercentage()} />)
            : (<Notification message="There is no feedback"></Notification>)}
        </Section>
      </>
     )
   }
 };
