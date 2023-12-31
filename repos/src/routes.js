import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
// Remova o import { Route } from 'react-router-dom';

import Main from './pages/Main';
import Repositorio from './pages/Repositorio';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/repositorio/:repositorio" component={Repositorio} />
      </Routes>
    </BrowserRouter>
  );
}
