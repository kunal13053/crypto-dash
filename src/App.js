import './App.css';
import WelcomeMessage from './WelcomeMessage'
// import styled, {css} from 'styled-components'
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import {AppProvider} from './AppProvider'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppLayout>
          <AppProvider>
            <AppBar />
            <WelcomeMessage />
          </AppProvider>
        </AppLayout>
      </header>
    </div>
  );
}

export default App;
