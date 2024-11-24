import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import Buku from './pages/Buku/Buku'; 
import Beranda from './pages/Beranda/Beranda';
import Informasi from './pages/Informasi/Informasi';
import Pustakawan from './pages/Pustakawan/Pustakawan';
import Tentang from './pages/Tentang/Tentang';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
            <Route index element={<Beranda />} />
            <Route path="buku" element={<Buku />} /> 
            <Route path="informasi" element={<Informasi />} />
            <Route path="pustakawan" element={<Pustakawan />} />
            <Route path="tentang" element={<Tentang />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);