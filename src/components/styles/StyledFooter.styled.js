import styled from 'styled-components';

export const StyledFooter = styled.footer`
	background-color: ${({ theme }) => theme.colors.colorSecondaryDark};
	position: relative;
	margin-top: 35rem;
	padding: 14.4rem 0 6.5rem 0;

	@media screen and (max-width: 64em) {
		margin-top: 23rem;
	}
`;

export const FooterContent = styled.section`
	display: grid;
	grid-template-columns: 3fr repeat(2, 1fr) 2fr;
	grid-column-gap: 8rem;
	grid-row-gap: 3.2rem;
	font-size: 1.4rem;
	color: #fff;

	@media screen and (max-width: 64em) {
		grid-gap: 4rem;
	}

	@media screen and (max-width: 37.5em) {
		display: block;
	}

	.logo {
		@media screen and (max-width: 37.5em) {
			margin-bottom: 3.2rem;
		}

		grid-column: 1 / -1;

		img {
			width: 15.2rem;
		}
	}

	.contact {
		@media screen and (max-width: 37.5em) {
			margin-bottom: 3.2rem;
		}

		&__location,
		&__phone,
		&__email {
			display: flex;
			align-items: center;
			margin-bottom: 1.6rem;

			img {
				width: 1.8rem;
				margin-right: 1.6rem;
			}
		}

		&__location {
			img {
				align-self: flex-start;
			}
		}
	}

	.menu {
		@media screen and (max-width: 37.5em) {
			margin-bottom: 3.2rem;
		}

		ul {
			list-style: none;

			li {
				margin-bottom: 1.6rem;

				a {
					transition: all 0.2s ease;
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}

	.social {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		&__icons {
			.icon {
				color: #fff;
				border: 1px solid #fff;
				border-radius: 50%;
				padding: 1rem;
				cursor: pointer;
				margin-right: 1.2rem;
				transition: all 0.2s;

				@media screen and (max-width: 37.5em) {
					margin-bottom: 3.2rem;
				}

				&:hover {
					color: ${({ theme }) => theme.colors.colorPrimary};
					border-color: ${({ theme }) => theme.colors.colorPrimary};
				}
			}
		}

		.copyright p {
			font-size: 1.2rem;
			line-height: 1.8rem;
		}
	}
`;
