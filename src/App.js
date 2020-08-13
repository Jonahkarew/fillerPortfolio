import React, {useEffect} from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import DotCanvas from './components/DotCanvas/';

function App() {

  useEffect(() =>{
    const loader = document.getElementById('loader');
    if(loader){
      loader.classList.add('hidden')
    }

    setTimeout(() =>{
      loader.outerHTML = ''
    }, 6000)
  })
  
  return (
    <React.Fragment>
      <DotCanvas />
         <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      
      <div className='About'>
        <About></About>
      </div>
      <div className='work'>
        <Work></Work>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
    </React.Fragment>
 
  );
}

export default App;
