import { Wrapper } from './Statistics.styled';
import PropTypes from 'prop-types';
 const Statistics = ({good, neutral, bad, total, PositivePercentage }) => ( 
    <Wrapper>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total:{total}</span>
            <span>PositiveFeedback:{ PositivePercentage}%</span>
    </Wrapper>
)
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    PositivePercentage: PropTypes.number.isRequired,
 }
export default Statistics;