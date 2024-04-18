import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const App = ({ noOfStars = 10 }) => {
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(0);

  function handleClick(getCurrentIndex) {
    setrating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    sethover(getCurrentIndex);
  }

  function handleMouseLeave() {
    sethover(rating);
  }

  return (
    <div
      className="star-rating"
      
    >
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};

export default App;
