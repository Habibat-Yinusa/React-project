import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Analytics from './components/Analytics'
import Update from './components/Update'
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  return (
    <div >
      <Navbar/>
      <Main/>
      <Analytics/>
      <Update/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
