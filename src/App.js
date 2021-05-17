import './App.css';
import Content from './components/Content';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { CounterContextProvider } from './contexts/CounterContext'

function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <NavBar />
        <SideBar>
          <p>Hello</p>
          <p>There</p>
          <p>Are </p>
          <p>You</p>
          <p>Doing</p>
          <p>Fine?</p>
        </SideBar>
        <Content />
      </div>
    </CounterContextProvider>

  );
}

export default App;
