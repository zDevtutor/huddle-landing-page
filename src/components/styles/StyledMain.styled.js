import styled from 'styled-components';

const StyledMain = styled.main`
	margin: 6rem 0;

	& > .card {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 15rem;
		align-items: center;
		padding: 5.5rem 3.2rem 5.5rem 12rem;
		box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.07);
		border-radius: 1.6rem;
		margin-bottom: 4rem;

		@media screen and (max-width: 64em) {
			padding: 5rem;
			grid-gap: 5rem;
		}

		@media screen and (max-width: 37.5em) {
			display: flex;
			flex-direction: column;
			grid-gap: 2.4rem;
			padding: 2.4rem 4rem;
			text-align: center;

			& > .card__info {
				order: 2;
			}

			& > .card__img {
				order: 1;
			}
		}

		&:nth-child(2) {
			& > .card__info {
				order: 2;
			}

			& > .card__img {
				order: 1;
			}
		}

		& > .card__info {
			h2 {
				margin-bottom: 1.6rem;

				@media screen and (max-width: 37.5em) {
					margin-top: 2.4rem;
				}
			}
		}
	}
`;

export default StyledMain;
