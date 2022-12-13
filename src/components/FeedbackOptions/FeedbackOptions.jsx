import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
 return (
    <div className={css.feedback__container}>
      {options.map(option => (
        <button
          className={css.feedback__btn} 
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
