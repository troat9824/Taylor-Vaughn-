import logo from './logo.svg';
import './App.css';
import About from './components/About Me';
import Nav from './components/Nav bar';

function App() {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
