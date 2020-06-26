import React from 'react';
import './Filter.css';

// Filter Types
const filter = (props) => {
  const types = [
    'all',
    'assassin',
    'fighter',
    'mage',
    'marksman',
    'support',
    'tank',
  ];

  // const labels = [];
  // for (let i = 0; i <= types.length; i++) {
  //   if (props.checkboxesState[types[i]] === 'checked') {
  //     console.log(props.checkboxesState[types[i]]);
  //     labels.push(
  //       <div className={types[i] + 'Checkbox'}>
  //         <input
  //           type="checkbox"
  //           id={types[i]}
  //           name={types[i]}
  //           value={types[i].charAt(0).toUpperCase() + types[i].slice(1)}
  //           onChange={props.checked}
  //         />
  //         <label for={types[i]}>
  //           {types[i].charAt(0).toUpperCase() + types[i].slice(1)}
  //         </label>
  //       </div>
  //     );
  //   } else if (props.checkboxesState[types[i]] === 'unchecked') {
  //     labels.push(
  //       <div className={types[i] + 'Checkbox'}>
  //         <input
  //           type="checkbox"
  //           id={types[i]}
  //           name={types[i]}
  //           value={types[i].charAt(0).toUpperCase() + types[i].slice(1)}
  //           onChange={props.checked}
  //         />
  //         <label for={types[i]}>
  //           {types[i].charAt(0).toUpperCase() + types[i].slice(1)}
  //         </label>
  //       </div>
  //     );
  //   }
  // }

  // Filter Labels
  const filterLabels = types.map((type) => {
    if (props.checkboxesState[type] === 'checked') {
      return (
        <div className={type + 'Checkbox'}>
          <input
            checked={true}
            type="checkbox"
            id={type}
            name={type}
            value={type.charAt(0).toUpperCase() + type.slice(1)}
            onChange={props.checked}
          />
          <label for={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </label>
        </div>
      );
    } else if (props.checkboxesState[type] === 'unchecked') {
      return (
        <div className={type + 'Checkbox'}>
          <input
            checked={false}
            type="checkbox"
            id={type}
            name={type}
            value={type.charAt(0).toUpperCase() + type.slice(1)}
            onChange={props.checked}
          />
          <label for={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </label>
        </div>
      );
    }
  });

  return (
    <div className="sideBar">
      <span>What should we play today?</span>
      <div id="champ-type">{filterLabels}</div>
    </div>
  );
};

export default filter;
