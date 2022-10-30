import { useState, useEffect } from 'react';
import MapCard from './MapCard';

const Maps = () => {
  const [maps, setMaps] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const url =
      'https://api.pandascore.co/valorant/maps?sort=&page=1&per_page=50';

    fetch(url)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error('error:' + err));
  };

  return (
    <div className="Maps">
      {maps.map((map) => (
        <MapCard key={map.uuid} map={map} />
      ))}
    </div>
  );
};

export default Maps;
