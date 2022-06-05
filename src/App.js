import logo from './logo.svg';
import './App.css';
import About from './components/About Me';
import Nav from './components/Nav bar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <div>
      </div>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Nav />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
