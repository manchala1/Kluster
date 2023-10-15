import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Books from './components/Books';
import Authors from './components/Authors';
import BookDetails from './components/BookDetails';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/Books" element={<Books />} />
        <Route path="/Authors" element={<Authors />} />
        <Route path="/book/:Id" element={<BookDetails />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
