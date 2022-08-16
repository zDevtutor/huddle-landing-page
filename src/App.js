import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { ThemeProvider } from 'styled-components';
import theme from './components/styles/Theme.styled';
import GlobalStyles from './components/styles/GlobalStyles';
import Container from './components/styles/Container.styled';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Container>
				<Main />
			</Container>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
