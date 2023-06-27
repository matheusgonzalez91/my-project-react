import './GlobalStyles.css';
import { themeContext } from './Context';
import { useContext } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Sobre from './Components/Sobre/Sobre';
import Projetos from './Components/Projetos/Projetos';
import FooterContato from './Components/FooterContato/FooterContato';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode ? '#1c1c1b' : '',
        color: darkMode ? 'white' : '',
      }}
    >
      <Navbar />
      <Main />
      <Sobre />
      <Projetos />
      <FooterContato />
    </div>
  );
}

export default App;
