import './App.css';
import WelcomeMessage from './WelcomeMessage'
// import styled, {css} from 'styled-components'
import AppLayout from './AppLayout'
import AppBar from './AppBar'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppLayout>
          <AppBar />
          <WelcomeMessage />
        </AppLayout>
      </header>
    </div>
  );
}

export default App;
