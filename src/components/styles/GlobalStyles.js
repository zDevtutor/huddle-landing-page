import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  font-size: 62.5%;

  @media screen and (max-width: 37.5em) {
			font-size: 56.25%;
		}
}

body {
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.7rem;
  font-family: 'Open Sans', sans-serif;
  color: ${({ theme }) => theme.colors.colorSecondaryDark};
  
  @media screen and (max-width: 64em) {
			font-size: 1.6rem;
      line-height: 2.4rem;
		}
}

h1, h2, h3, h4, h5, h6 {
font-family: 'Poppins', sans-serif;
font-weight: 600;
}

h1 {
  font-size: 4rem;
  line-height: 6rem;

  @media screen and (max-width: 64em) {
			font-size: 3rem;
      line-height: 4rem;
		}

  @media screen and (max-width: 37.5em) {
			font-size: 2.4rem;
      line-height: 3.6rem;
		}
}

h2 {
  font-size: 2.8rem;
  line-height: 4.2rem;

  @media screen and (max-width: 64em) {
			font-size: 2.4rem;
      line-height: 3rem;
		}

  @media screen and (max-width: 37.5em) {
			font-size: 2rem;
      line-height: 3rem;
		}
}

h3 {
  font-size: 3.2rem;
}

img {
		width: 100%;
}

a {
  font-size: inherit;
  color: #FFF;
  text-decoration: none;
}

`;

export default GlobalStyles;
