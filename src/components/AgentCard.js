import '../styles/Card.css';

const AgentCards = ({ agent }) => {
  return (
    <div className="card col-md-5">
      <img
        className="card-img"
        src={agent.fullPortrait}
        alt={`${agent.displayName} full portrait`}
      />
      <h2 className="card-title text-center">{agent.displayName}</h2>
      <p className="card-text text-center">{agent.description}</p>
    </div>
  );
};

export default AgentCards;
