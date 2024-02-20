import './App.css';
import About from './components/aboutUs/About';
import Contact from './components/contact/Contact';
import FooterBox from './components/footer/Footer';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar';
import CarouselDemo from './components/products/Products';
import Projects from './components/projects/Projects';
import OurTeam from "./components/ourTeam/OurTeam"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <CarouselDemo/>
      <Projects/>
      <About/>
      <OurTeam/>
      <Contact/>
      <FooterBox/>
    </div>
  );
}

export default App;
