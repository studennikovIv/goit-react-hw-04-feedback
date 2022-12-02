import React from 'react';
import { useState } from 'react';
import Statistics from './components/Statistics/Statistic';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickPlus = e => {
    let currEvenet = e.target.innerHTML;
    if (currEvenet === 'Good') {
      setGood(good + 1);
    }
    if (currEvenet === 'Neutral') {
      setNeutral(neutral + 1);
    }

    if (currEvenet === 'Bad') {
      setBad(bad + 1);
    }
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };
  return (
    <>
      <div className="conteiner">
        <Section titele={'Please leave feedback'}>
          <FeedbackOptions
            good={good}
            neutral={neutral}
            bad={bad}
            onLeaveFeedback={clickPlus}
          />
        </Section>
        <Section titele={'Statistics'}>
          {countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positiveFeedback={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    </>
  );
};

export default App;
