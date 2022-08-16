import React from 'react';
import Container from './styles/Container.styled';
import StyledButton from './styles/StyledButton.styled';

import theme from './styles/Theme.styled';

import {
	StyledHeader,
	StyledNav,
	StyledSection,
} from './styles/StyledHeader.styled';

function Header() {
	return (
		<StyledHeader>
			<Container>
				<StyledNav>
					<a href='index.html'>
						<img className='logo' src='./images/logo.svg' alt='Huddle Logo' />
					</a>
					<StyledButton>Try It Free</StyledButton>
				</StyledNav>
				<StyledSection>
					<div className='showcase__desc'>
						<h1>Build The Community Your Fans Will Love</h1>
						<p>
							Huddle re-imagines the way we build communities. You have a voice,
							but so does your audience. Create connections with your users as
							you engage in genuine discussion.
						</p>
						<StyledButton
							bg={theme.colors.colorPrimary}
							color='#FFF'
							shadowColor='rgba(255, 82, 193, 0.166185)'
							responsivePadding='1.5rem 5rem'>
							Get Started For Free
						</StyledButton>
					</div>
					<div className='showcase__img'>
						<img
							src='./images/illustration-mockups.svg'
							alt='Illustration Mockups'
						/>
					</div>
				</StyledSection>
			</Container>
		</StyledHeader>
	);
}

export default Header;
