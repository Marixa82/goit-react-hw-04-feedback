import { Wrapper, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

 const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
        {options.map((option) => (
          <Button key={option} onClick={() => onLeaveFeedback(option)}>
              {option}
          </Button>
        ))}
          </Wrapper>
  );
};
          
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string,).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
 }
        
export default FeedbackOptions;
