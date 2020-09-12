import React from 'react';
import styled from 'styled-components';
import { eventCardsInfo, eventsTitle } from '@config';
import { Section, ts40r, tsm18r, ts50b, tsm16r, ts36r, colors } from '@design/theme';
import { media } from '@design/media';

const EventsSection = styled(Section)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 100vh;
`;

const SectionTitle = styled.div`
    ${ts50b},
    margin-bottom: 30px;
`;

const EventCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 45vh;
    margin-top: 60px;
`;

// card container
const InfoContainer = styled.div`
    position: absolute;
    ${({ reverse }) => (reverse ? 'left: 0;' : 'right: 0;')}

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: ${({ reverse }) => (reverse ? 'flex-start;' : 'flex-end;')}

    width: 60%;
    height: 100%;

    ${media.thone`
        width: 100%;
        align-items: flex-start;
        background-color: ${colors.main50alpha};
    `}
`;

// card image
const ImageContainer = styled.div`
    position: absolute;
    ${({ reverse }) => (reverse ? 'right: 0;' : 'left: 0;')}

    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;
    height: 100%;
    overflow: hidden;

    ${media.thone`
        width: 100%;
    `}
`;

//card title
const EventTitle = styled.div`
    ${ts40r}
    ${media.tablet`${ts36r}`};
    ${media.thone`
        padding-left: 25px;
        padding-top: 30px;
    `}
    ${media.phone`
        font-size: 30px;
    `}
    ${media.tiny`
        font-size: 24px;
    `}
`;

// event card description
const EventDescription = styled.div`
    ${tsm18r}
    background-color: ${colors.main};
    margin: ${({ reverse }) => (reverse ? '20px 20px 20px 0px' : '20px 0px 20px 20px')};
    padding: 15px;

    ${media.tablet`${tsm16r}`};
    ${media.thone`
        background-color: rgba(0, 0, 0, 0);
        margin: 10px;
    `}
    ${media.phone`
        padding-top: 0px;
        font-size: 13px;
    `}
    ${media.tiny`
        font-size: 9px;
    `}
`;

const Image = styled.img`
    object-fit: contain;
    object-position: 0px 100px;
`;

const EventCard = ({ title, description, image, reverse }) => {
    // reversed: Image on the right, info on the left.
    // non reversed: Image on the left, info on the right.
    return (
        <EventCardContainer>
            <ImageContainer reverse={reverse}>
                <Image src={image} alt={title} />
            </ImageContainer>
            <InfoContainer reverse={reverse}>
                <EventTitle>{title}</EventTitle>
                <EventDescription reverse={reverse}>{description}</EventDescription>
            </InfoContainer>
        </EventCardContainer>
    );
};

const Events = () => {
    return (
        <EventsSection id="events">
            <SectionTitle>{eventsTitle}</SectionTitle>
            {eventCardsInfo.map((info, index) => (
                <EventCard key={index} title={info.title} description={info.description} image={info.image} reverse={index % 2 === 0 ? false : true} />
            ))}
        </EventsSection>
    );
};

export default Events;
