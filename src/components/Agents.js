import { useEffect, useState } from 'react';
import AgentCards from './AgentCard';
import '../styles/Agents.css';

const Agents = () => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('https://valorant-api.com/v1/agents');
    const data = await response.json();
    setAgents(data.data);
  };

  return (
    <div className="Agents">
      <div className="row">
        {agents.map((agent) => {
          if (agent.isPlayableCharacter) {
            return <AgentCards key={agent.uuid} agent={agent} />;
          }
        })}
      </div>
    </div>
  );
};

export default Agents;
