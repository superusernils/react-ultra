import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { FooterContainer,
         FooterSubscription,
         FooterSubHeading,
         FooterSubText,
         Form,
         FormInput,
         FooterLinksContainer,
         FooterLinksItems,
         FooterLinksWrapper,
         FooterLinkTitle,
         FooterLink,
         SocialMedia,
         SocialIcon,
         SocialMediaWrap,
         SocialLogo,
         SocialIcons,
         SocialIconLink,
         WebsiteRights
         } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/sign-up'>Testimonials</FooterLink>
                        <FooterLink to='/sign-up'>Careers</FooterLink>
                        <FooterLink to='/sign-up'>Investors</FooterLink>
                        <FooterLink to='/sign-up'>Terms of service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/sign-up'>Testimonials</FooterLink>
                        <FooterLink to='/sign-up'>Careers</FooterLink>
                        <FooterLink to='/sign-up'>Investors</FooterLink>
                        <FooterLink to='/sign-up'>Terms of service</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/sign-up'>Testimonials</FooterLink>
                        <FooterLink to='/sign-up'>Careers</FooterLink>
                        <FooterLink to='/sign-up'>Investors</FooterLink>
                        <FooterLink to='/sign-up'>Terms of service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/sign-up'>Testimonials</FooterLink>
                        <FooterLink to='/sign-up'>Careers</FooterLink>
                        <FooterLink to='/sign-up'>Investors</FooterLink>
                        <FooterLink to='/sign-up'>Terms of service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon/>
                        ULTRA
                    </SocialLogo>
                    <WebsiteRights>ULTRA 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='youtube' rel='noreferrer noopener'>
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='linkedin'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
