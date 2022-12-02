import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <ul className={css.btnList}>
        <li>
          <button
            style={{ textTransform: 'capitalize' }}
            onClick={onLeaveFeedback}
          >
            Good
          </button>
        </li>
        <li>
          <button
            style={{ textTransform: 'capitalize' }}
            onClick={onLeaveFeedback}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            style={{ textTransform: 'capitalize' }}
            onClick={onLeaveFeedback}
          >
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
