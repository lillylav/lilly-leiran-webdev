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
    <body className="light-background">
      <Nav />
      <main className="container light-background">
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
    </body>
  );
}

export default App;
