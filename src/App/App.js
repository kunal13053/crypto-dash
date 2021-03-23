import './App.css';
// import styled, {css} from 'styled-components'
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import {AppProvider} from './AppProvider'
import Settings from '../Settings/index'
import Content from '../Shared/Content'
import Dashboard from '../Dashboard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppLayout>
          <AppProvider>
            <AppBar />
            <Content>
              <Settings />
              <Dashboard />
            </Content>
          </AppProvider>
        </AppLayout>
      </header>
    </div>
  );
}

export default App;
