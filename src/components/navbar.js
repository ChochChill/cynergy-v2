import React, { Component } from 'react';
import styled from 'styled-components';
import { LogoIcon } from '@components/icons';
import { navLinks } from '@config';
import { tsm18r, colors } from '@design/theme';
import { media } from '@design/media';
import Menu from './menu';

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 40px 10px 40px;
    ${media.phone`margin: 16px 18px 10px 18px;`};
    ${media.tablet`margin: 16px 18px 10px 18px;`};
    ${media.desktop``};
`;
const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        display: block;
        width: 300px;
        height: auto;
        ${media.phone`width: 200px`};
        ${media.tablet`width: 200px`};
        ${media.desktop``};
    }
    svg {
    }
`;
const Hamburger = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    ${media.tablet`display:flex`};
    z-index: 11;
`;
const HamburgerBox = styled.div`
    position: relative;
`;

const HamburgerLine = styled.div`
    width: 24px;
    height: 2px;
    background-color: ${colors.main};
    border-radius: 10px;
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    right: 0;
    transform: ${props => (props.isMenuOpen ? `rotate(45deg)` : '')};
    &:before,
    &:after {
        width: 24px;
        height: 2px;
        background-color: ${colors.main};
        border-radius: 10px;
        content: '';
        position: absolute;
        display: block;
        left: auto;
        right: 0;
    }
    &:before {
        top: ${props => (props.isMenuOpen ? '0px' : '-10px')};
        width: ${props => (props.isMenuOpen ? '100%' : '125%')};
        transform: ${props => (props.isMenuOpen ? `rotate(-90deg)` : '')};
    }
    &:after {
        bottom: ${props => (props.isMenuOpen ? '0px' : '-10px')};
        width: ${props => (props.isMenuOpen ? '100%' : '75%')};
        opacity: ${props => (props.isMenuOpen ? 0 : 1)};
    }
`;

const NavLinks = styled.div`
    ${tsm18r}
    display: flex;
    ${media.phone`display: none`};
    ${media.tablet`display:none`};
    ${media.desktop``};
`;
const NavLink = styled.div`
    margin-left: 50px;
`;

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
        };
    }
    toggleMenu = () => {
        this.setState(prevState => ({
            isMenuOpen: !prevState.isMenuOpen,
        }));
        console.log('');
    };
    render() {
        return (
            <>
                <NavbarContainer>
                    <LogoWrapper>
                        <a href="/">
                            <LogoIcon />
                        </a>
                    </LogoWrapper>
                    <Hamburger onClick={() => this.toggleMenu()}>
                        <HamburgerBox>
                            <HamburgerLine isMenuOpen={this.state.isMenuOpen} />
                        </HamburgerBox>
                    </Hamburger>
                    <NavLinks>
                        {navLinks.map((navLink, index) => (
                            <NavLink key={index}>
                                <a href={navLink.url}>{navLink.name}</a>
                            </NavLink>
                        ))}
                    </NavLinks>
                </NavbarContainer>
                {this.state.isMenuOpen ? <Menu /> : ''}
            </>
        );
    }
}
export default Navbar;
