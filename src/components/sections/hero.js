import React from 'react';
import styled from 'styled-components';
import { ts100b, tsd80d, ts80r, ts50r, ts50b, ts36b, tsd40d, tsd36d, ts40r, ts18r, ts16r, colors, Section } from '@design/theme';
import { media } from '@design/media';
import { email, tagline } from '@config';
import { Button } from '@components';

const StyledContactButton = styled.a`
    margin-top: 60px;
`;

const HeroContainer = styled(Section)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 80vh;
`;

const Greeting = styled.div`
    ${ts100b}
    ${media.tablet`${ts50b}`};
    ${media.phone`${ts50b}`};
    ${media.desktop``};
    span {
        color: ${colors.main};
    }
`;
const Name = styled.div`
    ${ts80r}
    ${media.tablet`${ts40r}`};
    ${media.phone`${ts40r}`};
    ${media.tiny`${ts36b}`};
    ${media.desktop``};
    span {
        ${tsd80d};
        ${media.tablet`${tsd40d}`};
        ${media.phone`${tsd40d}`};
        ${media.tiny`${tsd36d}`};
        ${media.desktop``};
        b {
            color: ${colors.main};
        }
    }
`;
const Tagline = styled.div`
    ${ts50r}
    opacity: 0.6;
    ${media.tablet`${ts18r}`};
    ${media.phone`${ts18r}`};
    ${media.tiny`${ts16r}`};
    ${media.desktop``};
`;
const Hero = () => {
    return (
        <HeroContainer>
            <Greeting>
                Hello<span>.</span>
            </Greeting>
            <Name>
                this is&nbsp;
                <span>
                    CY<b>NERGY</b>
                </span>
            </Name>
            <Tagline>{tagline}</Tagline>
            <StyledContactButton href={`mailto:${email}`}>
                <Button text={'Get in touch'} />
            </StyledContactButton>
        </HeroContainer>
    );
};

export default Hero;
