const MapCard = ({ map }) => {
  return (
    <div className="card col-sm-6">
      <h2 className="text-center">{map.displayName}</h2>
      <img src={map.splash} alt={`${map.displayName} splash`} />
    </div>
  );
};

export default MapCard;
