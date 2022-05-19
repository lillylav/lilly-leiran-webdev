// import libraries
import React from 'react';
import 'bulma/css/bulma.min.css';

//import files
import './App.css';

// import components
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

// page's JSX
function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
