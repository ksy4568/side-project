import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Landing from './pages/landing';
import List from './pages/list';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/book" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
