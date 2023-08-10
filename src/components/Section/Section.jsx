import { Title, Wrapper } from './Section.styled';

import PropTypes from 'prop-types';


 const Section = ({ title, children }) => {
    return (
        <Wrapper>
            <Title >{title}</Title>
            { children}</Wrapper>
        
    );
};
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}
export default Section;