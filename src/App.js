
import './App.css';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import React,{useState, useEffect} from 'react';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';



function App() {

  const [scrollHeight, setScrollHeight] = useState()

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollHeight(position)
  }

  useEffect( () =>{
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])



  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight}/>
      <Cover/>
      <About/>
      <Slider/>
      <Info/>
      <Footer/>
     
    </div>
  );
}

export default App;
