
import './App.css';
// import './components/Hero_Section/Hero.js'; WRONGGG 
import Hero from './components/Hero_Section/Hero';
import Bio from './components/Bio_Section/Bio';
import Skills from './components/Skills_Section/Skills';
import Education from './components/Education_Section/Education'; 
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Bio/>
      <Skills/>
      <Education/>
      <Footer></Footer>
    </div>
  );
}

export default App;
