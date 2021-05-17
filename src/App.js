import './App.css';
import Content from './components/Content';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
