import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalastyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';

import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='EVENTS' data={productData} />
      
      
      
      <Footer />
    </Router>
  );
}

export default App;