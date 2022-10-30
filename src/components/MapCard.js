const MapCard = ({ map }) => {
  return (
    <div>
      <img src={map.splash} alt={`${map.displayName} splash image`} />
      <h2>{map.displayName}</h2>
      <a href={map.mapUrl}>Map URL</a>
    </div>
  );
};

export default MapCard;
