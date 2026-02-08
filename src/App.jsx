import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';

const WithRouter = ({ basePath, children }) => {
  if (basePath === '/') {
    return (
      <BrowserRouter basename={basePath}>
        {children}
      </BrowserRouter>
    );
  }
  return children;
};

const App = ({ basePath = '/' }) => (
  <WithRouter basePath={basePath}>
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/item/:id" element={<div>Repo2 — Item detail</div>} />
    </Routes>
  </WithRouter>
);

export default App;
