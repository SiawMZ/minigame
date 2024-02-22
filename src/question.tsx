import { useState } from "react";
import "../src/assets/game.css";

type objectProps = {
  object: string;
  object2: string;
};

export function Question({ object, object2 }: objectProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={`grid-container ${isFlipped ? "card flipped" : "card"}`}
        onClick={toggleCard}
      >
        <div className="card" id="card">
          <div className="card__content">
            <p className="card__title">{object2}</p>
            <p className="card__description">{object}</p>
          </div>
        </div>
      </div>
    </>
  );
}
