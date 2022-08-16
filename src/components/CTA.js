import React from 'react';
import StyledButton from './styles/StyledButton.styled';
import StyledCTA from './styles/StyledCTA.styled';

import theme from './styles/Theme.styled';

function CTA() {
	return (
		<StyledCTA>
			<h2>Ready To Build Your Community?</h2>
			<StyledButton
				bg={theme.colors.colorPrimary}
				color='#FFF'
				shadowColor='rgba(0, 37, 46, 0.223053)'
				padding='2.5rem 10rem'
				responsivePadding='1.5rem 5rem'>
				Get Started For Free
			</StyledButton>
		</StyledCTA>
	);
}

export default CTA;
