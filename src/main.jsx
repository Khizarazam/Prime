import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './Components/Home.jsx';
import We_Are from './Components/We_Are.jsx';
import Services from './Components/Services.jsx';
import Glossary from './Components/Glossary.jsx';
import Contact from './Components/Contact.jsx';
import ElectroPlating from './Components/ElectroPlating.jsx';
import WeldingElectrodes from './Components/WeldingElectrodes.jsx';
import Abrasive from './Components/Abrasive.jsx';
import Disinfectants from './Components/Disinfectants.jsx';
import PP_Pvc from './Components/PP_pvc.jsx';
import ChromicAcid from './Components/ChromicAcid.jsx';
import NitricAcid from './Components/NitricAcid.jsx';
import ElectroplatingPlants from './Components/ElectroplatingPlants.jsx';
import ElectroPLatingEquipments from './Components/ElectroPLatingEquipments.jsx';

const ErrorPage = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h2>Oops! This page doesn't exist.</h2>
    <p>The page you're looking for cannot be found. Please check the URL or go back to the homepage.</p>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter basename="/"> 
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="we-are" element={<We_Are />} />
          <Route path="services" element={<Services />} />
          <Route path="glossary" element={<Glossary />} />
          <Route path="electroplating" element={<ElectroPlating />} />
          <Route path="welding-electrodes" element={<WeldingElectrodes />} />
          <Route path="abrasive" element={<Abrasive />} />
          <Route path="disinfectants" element={<Disinfectants />} />
          <Route path="pp-pvc" element={<PP_Pvc />} />
          <Route path="chromic-acid" element={<ChromicAcid />} />
          <Route path="nitric-acid" element={<NitricAcid />} />
          <Route path="electroplating-plants" element={<ElectroplatingPlants />} />
          <Route path="electroplating-equipments" element={<ElectroPLatingEquipments />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);