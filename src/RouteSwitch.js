import { Routes, Route } from 'react-router-dom';
import Agents from './components/Agents';
import Maps from './components/Maps';
import Home from './components/Home';
import Weapons from './components/Weapons';

const RouteSwitch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/weapons" element={<Weapons />} />
    </Routes>
  );
};

export default RouteSwitch;
