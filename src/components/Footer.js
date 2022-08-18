import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import CTA from './CTA';

import Container from './styles/Container.styled';
import { StyledFooter, FooterContent } from './styles/StyledFooter.styled';

function Footer() {
	return (
		<StyledFooter>
			<CTA />
			<Container>
				<FooterContent>
					<div className='logo'>
						<img src='./images/footer-logo.svg' alt='Huddle Footer Logo' />
					</div>
					<div className='contact'>
						<div className='contact__location'>
							<img src='./images/icon-location.svg' alt='Location' />
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua
							</p>
						</div>
						<div className='contact__phone'>
							<img src='./images/icon-phone.svg' alt='Phone' />
							<p>+1-543-123-4567</p>
						</div>
						<div className='contact__email'>
							<img src='./images/icon-email.svg' alt='Email' />
							<p>example@huddle.com</p>
						</div>
					</div>

					<div className='menu'>
						<ul>
							<li>
								<a href='index.html'>About Us</a>
							</li>
							<li>
								<a href='index.html'>What We Do</a>
							</li>
							<li>
								<a href='index.html'>FAQ</a>
							</li>
						</ul>
					</div>

					<div className='menu'>
						<ul>
							<li>
								<a href='index.html'>Career</a>
							</li>
							<li>
								<a href='index.html'>Blog</a>
							</li>
							<li>
								<a href='index.html'>Contact Us</a>
							</li>
						</ul>
					</div>

					<div className='social'>
						<div className='social__icons'>
							<a
								aria-label='facebook'
								href='http://facebook.com'
								target={'_blank'}
								rel='noreferrer'>
								<FontAwesomeIcon icon={faFacebookF} className='icon' />
							</a>
							<a
								aria-label='twitter'
								href='http://twitter.com'
								target={'_blank'}
								rel='noreferrer'>
								<FontAwesomeIcon icon={faTwitter} className='icon' />
							</a>
							<a
								aria-label='instagram'
								href='http://instagram.com'
								target={'_blank'}
								rel='noreferrer'>
								<FontAwesomeIcon icon={faInstagram} className='icon' />
							</a>
						</div>

						<div className='copyright'>
							<p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
						</div>
					</div>
				</FooterContent>
			</Container>
		</StyledFooter>
	);
}

export default Footer;
