import React from 'react'
import { animateScroll as scroll } from 'react-scroll'


import { 
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin

 } from 'react-icons/fa'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebSiteRigths,
    SocialIcons,
    SocialIconLink
 } from './FooterElements'

const  Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    };
    

    return (
        <>
          <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle >About us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testemhunos</FooterLink>
                            <FooterLink to="/signin">Carreira</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle >About us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testemhunos</FooterLink>
                            <FooterLink to="/signin">Carreira</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle >About us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testemhunos</FooterLink>
                            <FooterLink to="/signin">Carreira</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle >About us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testemhunos</FooterLink>
                            <FooterLink to="/signin">Carreira</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper> 
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={ toggleHome }>
                            Dolleta Doll
                        </SocialLogo>
                        <WebSiteRigths>Dolleta Doll ® {new Date().getFullYear()} all rights reserved.
                        </WebSiteRigths>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_black" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            
                            <SocialIconLink href="/" target="_black" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                           
                            <SocialIconLink href="/" target="_black" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            
                            <SocialIconLink href="/" target="_black" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            
                            <SocialIconLink href="/" target="_black" aria-label="Linkdin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
          </FooterContainer>  
        </>
    )
}

export default  Footer;
