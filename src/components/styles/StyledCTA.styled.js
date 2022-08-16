import styled from 'styled-components';

const StyledCTA = styled.div`
	width: 50%;
	background-color: #fff;
	box-shadow: 0px 0px 1.4rem rgba(0, 0, 0, 0.0710768);
	border-radius: 1.5rem;
	padding: 5.5rem 13.2rem;
	text-align: center;
	position: absolute;
	top: -20rem;
	left: 50%;
	transform: translateX(-50%);

	@media screen and (max-width: 64em) {
		width: 90%;
		padding: 4rem 2rem;
		top: -10rem;
	}

	& > h2 {
		margin-bottom: 3.2rem;
	}
`;

export default StyledCTA;
