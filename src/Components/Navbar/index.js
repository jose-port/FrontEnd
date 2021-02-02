import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

import { 
     Nav,
     NavbarContainer,
     NavLog,
     HamburguerIcon,
     NavMenu,
     NavItem,
     NavLinks,
     NavBtn,
     NavBtnLink

    } from './NavBarElements'


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener ('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    };
    
    return (
        <>
            <Nav scrollNav={ scrollNav }>
                <NavbarContainer>
                    <NavLog to='/' onClick={ toggleHome }>Dolleta Doll</NavLog>
                    <HamburguerIcon onClick={ toggle }>
                        <FaBars />
                    </HamburguerIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="discovery"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                            >
                                Discovery
                                </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="services"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                                >
                                    Services
                                    </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="signup"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                                >
                                    Signup
                                    </NavLinks>
                        </NavItem>     
                        <NavBtn>
                            <NavBtnLink 
                                to="/singin"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                                >
                                    Sign in
                                    </NavBtnLink>    
                        </NavBtn>             
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
