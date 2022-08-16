import styled from 'styled-components';

export const StyledHeader = styled.header`
	min-height: 100vh;
	background-image: url('./images/bg-hero-desktop.svg');
	background-size: cover;
	background-position: center;
	background-color: ${({ theme }) => theme.colors.colorSecondaryLight};

	@media screen and (max-width: 64em) {
		min-height: auto;
	}

	@media screen and (max-width: 37.5em) {
		background-image: url('./images/bg-hero-mobile.svg');
	}
`;

export const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 7rem;

	.logo {
		width: 20rem;

		@media screen and (max-width: 37.5em) {
			width: 10rem;
		}
	}
`;

export const StyledSection = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 5rem;
	align-items: center;
	padding: 7rem 0;

	@media screen and (max-width: 37.5em) {
		display: block;
		text-align: center;
	}

	.showcase__desc {
		@media screen and (max-width: 37.5em) {
			margin-bottom: 5.6rem;
		}

		& > h1,
		& > p {
			margin-bottom: 3.2rem;
		}
	}
`;
