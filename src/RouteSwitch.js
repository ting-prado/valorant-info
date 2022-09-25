import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Agents from './components/Agents';
import Maps from './components/Maps';
import Weapons from './components/Weapons';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/weapons" element={<Weapons />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
