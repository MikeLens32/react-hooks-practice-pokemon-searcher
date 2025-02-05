import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, sprites }) {

  const [showFront, setShowFront] = useState(true)

  return (
    <Card>
      <div onClick={() => setShowFront(!showFront)}>
        <div className="image">
          <img src={showFront ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
