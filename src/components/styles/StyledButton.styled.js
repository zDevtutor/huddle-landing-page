import styled from 'styled-components';

const StyledButton = styled.button`
	font-size: 1.4rem;
	font-weight: 700;
	color: ${({ color, theme }) => color || theme.colors.colorSecondaryDark};
	background-color: ${({ bg }) => bg || '#FFF'};
	text-align: center;
	border: none;
	outline: none;
	border-radius: 10rem;
	box-shadow: 0px 3px 11px
		${({ shadowColor }) => shadowColor || 'rgba(0, 0, 0, 0.0954201)'};
	padding: ${({ padding }) => padding || '1.6rem 6.5rem'};
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		opacity: 0.8;
	}

	@media screen and (max-width: 37.5em) {
		font-size: 1rem;
		line-height: 1.4rem;
		padding: ${({ responsivePadding }) => responsivePadding || '0.4rem 2.2rem'};
	}
`;

export default StyledButton;
