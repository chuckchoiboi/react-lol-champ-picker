import React from 'react';
import './Stats.css';

const stats = (props) => {
  const ratings = [];
  for (let i = 10; i >= 1; i--) {
    if (i !== props.difficultyNum) {
      ratings.push(
        <>
          <input type="radio" name="rating" id={'rata' + i} />
          <label for={'rata' + i}>{i}</label>
        </>
      );
    } else if (i === props.difficultyNum) {
      ratings.push(
        <>
          <input
            type="radio"
            name="rating"
            className="checked"
            id={'rata' + i}
          />
          <label for={'rata' + i}>{i}</label>
        </>
      );
    }
  }

  return (
    <div id="champ-preview">
      <div id="champ-detail">
        <h2>{props.name}</h2>
        <h3>{props.title}</h3>
        <p>{props.blurb}</p>
      </div>
      <div id="champ-stats">
        <span id="attack">{props.attack}</span>
        <br />
        <span id="defense">{props.defense}</span>
        <br />
        <span id="magic">{props.magic}</span>
        <br />
        <span id="difficulty">{props.difficulty}</span>

        {props.name ? (
          <div className="rating" style={{ display: 'flex' }}>
            {ratings}
          </div>
        ) : (
          <div className="rating">{ratings}</div>
        )}
      </div>
    </div>
  );
};

export default stats;
