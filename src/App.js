import React, { Component } from 'react';
import './App.css';
import Champs from './Champs/Champs';
import Filter from './Filter/Filter';
import Stats from './Stats/Stats';

class App extends Component {
  state = {
    champData: [],
    champImages: [],
    isLoaded: false,
    champStats: {
      name: '',
      title: '',
      blurb: '',
      attack: '',
      defense: '',
      magic: '',
      difficulty: '',
      difficultyNum: '',
    },
    checkboxes: {
      all: 'checked',
      assassin: 'unchecked',
      fighter: 'unchecked',
      mage: 'unchecked',
      marksman: 'unchecked',
      support: 'unchecked',
      tank: 'unchecked',
    },
  };

  componentDidMount() {
    fetch(
      'https://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion.json'
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          champData: Object.keys(json.data).map((champ) => {
            return json.data[champ];
          }),
          champImages: Object.keys(json.data).map((champ) => {
            for (let i = 0; i < json.data[champ].name.length; i++) {
              return `http://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/${json.data[champ].image.full}`;
            }
          }),
        });
      });
  }

  mouseEnterHandler = (event) => {
    event.target.className = event.target.className + ' hover';
    let i = event.target.id;
    this.setState({
      champStats: {
        name: this.state.champData[i].name,
        title:
          this.state.champData[i].title.charAt(0).toUpperCase() +
          this.state.champData[i].title.slice(1),
        blurb: this.state.champData[i].blurb,
        attack: 'Attack: ' + this.state.champData[i].info.attack,
        defense: 'Defense: ' + this.state.champData[i].info.defense,
        magic: 'Magic: ' + this.state.champData[i].info.magic,
        difficulty: 'Difficulty: ' + this.state.champData[i].info.difficulty,
        difficultyNum: this.state.champData[i].info.difficulty,
      },
    });
  };

  mouseLeaveHandler = (event) => {
    event.target.className = event.target.className.replace('hover', '');
    this.setState({
      champStats: {
        name: '',
        title: '',
        blurb: '',
        attack: '',
        defense: '',
        magic: '',
        difficulty: '',
      },
    });
  };

  checkboxHandler = (event) => {
    const targetId = event.target.id;
    const checkboxes = this.state.checkboxes;

    if (targetId === 'all' && checkboxes[targetId] === 'unchecked') {
      checkboxes[targetId] = 'checked';
      checkboxes.assassin = 'unchecked';
      checkboxes.fighter = 'unchecked';
      checkboxes.mage = 'unchecked';
      checkboxes.marksman = 'unchecked';
      checkboxes.support = 'unchecked';
      checkboxes.tank = 'unchecked';
    } else if (targetId !== 'all' && checkboxes.all === 'checked') {
      checkboxes.all = 'unchecked';
      checkboxes[targetId] = 'checked';
    } else if (checkboxes[targetId] === 'checked') {
      checkboxes[targetId] = 'unchecked';
    } else if (checkboxes[targetId] === 'unchecked') {
      checkboxes[targetId] = 'checked';
    }
    this.setState({
      state: this.state,
    });
  };

  render() {
    var { isLoaded, champData, champImages, checkboxes } = this.state;

    const champGallery = champData.map((ch, index) => {
      for (let i = 0; i < ch.tags.length; i++) {
        if (checkboxes.all === 'checked') {
          return (
            <Champs
              data={ch}
              list={ch.name}
              images={champImages[index]}
              types={ch.tags}
              index={index}
              entered={this.mouseEnterHandler}
              left={this.mouseLeaveHandler}
            />
          );
        } else if (checkboxes[ch.tags[i].toLowerCase()] === 'checked') {
          return (
            <Champs
              data={ch}
              list={ch.name}
              images={champImages[index]}
              types={ch.tags}
              index={index}
              entered={this.mouseEnterHandler}
              left={this.mouseLeaveHandler}
            />
          );
        }
      }
      // if(ch.tags){

      // }

      // return (
      //   <Champs
      //     data={ch}
      //     list={ch.name}
      //     images={champImages[index]}
      //     types={ch.tags}
      //     index={index}
      //     entered={this.mouseEnterHandler}
      //     left={this.mouseLeaveHandler}
      //   />
      // );
    });

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <h1>Pick your Champion!</h1>
          <Filter
            checked={this.checkboxHandler}
            checkboxesState={this.state.checkboxes}
          />
          <div className="champ-gallery">{champGallery}</div>
          <Stats
            name={this.state.champStats.name}
            title={this.state.champStats.title}
            blurb={this.state.champStats.blurb}
            attack={this.state.champStats.attack}
            defense={this.state.champStats.defense}
            magic={this.state.champStats.magic}
            difficulty={this.state.champStats.difficulty}
            difficultyNum={this.state.champStats.difficultyNum}
          />
        </div>
      );
    }
  }
}

export default App;
