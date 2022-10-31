import { useState, useEffect } from 'react';
import MapCard from './MapCard';
import '../styles/Maps.css';

const Maps = () => {
  const [maps, setMaps] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch('https://valorant-api.com/v1/maps')
      .then((res) => res.json())
      .then((data) => setMaps(data.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="Maps row d-flex justify-content-around">
      {maps.map((map) => (
        <MapCard key={map.uuid} map={map} />
      ))}
    </div>
  );
};

export default Maps;
