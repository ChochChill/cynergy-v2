import React from 'react';
import styled from 'styled-components';
import { colors, tsm18r, tsm12r } from '@design/theme';
import { media } from '@design/media';

const StyledButton = styled.div`
    ${tsm18r};
    padding: 18px;
    color: ${colors.main};
    border: 2px solid ${colors.main};
    border-radius: 5px;
    font-weight: bolder;
    ${media.phone`
        ${tsm12r};
        padding: 16px;
        border-width: 1px;
    `};
    :hover {
        background-color: ${colors.main};
        color: white;
        border: 2px solid ${colors.main50alpha};
        -webkit-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;
    }
`;

const Button = ({ text }) => {
    return <StyledButton>{text}</StyledButton>;
};

export default Button;
