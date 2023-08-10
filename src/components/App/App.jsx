import {  useState } from "react";
import  Notification  from "../Notification";
import FeedbackOptions from '../Feedback';
import Statistics from "../Statistics";
import Section from "../Section";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
   
  const handleIncrement = feedbackType => {
    switch (feedbackType) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  }; 
   const countTotalFeedback = () => {
    return good + neutral + bad;
  };  

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement} />
      </Section>
      
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            PositivePercentage={countPositiveFeedbackPercentage()} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  )
}
