import React, { Component } from 'react';
import './Scores.css';
import { scoreTypes } from '../constants';
import ScoreRange from '../components/scoreRange';

class ScoresContainer extends Component {
  static calculateMedian(scores){
    const scoreAcc = scores.reduce((acc, s) => s + acc, 0);
    const scoreLength = scores.length;
    return Math.round(scoreAcc / scoreLength);
  } 

  static calculateScoreMedian(score, subType, amount){
    
    const subTypeIndex = score.children.findIndex(child => child.id === subType);
    score.children[subTypeIndex].score = parseInt(amount, 10);

    return ScoresContainer.calculateMedian(
      score.children.map(child => child.score)
    );
  } 

  static getScore(type) {
    return scoreTypes.find(scoreType => scoreType.id === type);
  }

  constructor(props) {
    super(props);

    this.state = {};
    this.initState();

    this.events = {
      onInputChange: this.setScore.bind(this)
    };
  }

  initState() {
    scoreTypes.forEach(score => Object.assign(
      this.state, 
      {
        [score.id]: Object.assign({}, {
          score: 50,
          children: score.children.map(child => {child.score = 50; return child;})
        })
      }));
  }

  setScore(type, subType, amount) {
    const score = ScoresContainer.getScore(type);
    const median = ScoresContainer.calculateScoreMedian(
      score,
      subType,
      amount);
    score.score = median;
    this.setState({
      [type]: score
    });
  }

  getTotalScore() {
    const scores = Object.values(this.state); 
    return Math.round(scores.reduce((acc, score) => score.score + acc, 0) / scores.length);
  }

  render() {
    return (
      <div className="Scores">
        <p>Total: {this.getTotalScore()}</p>
        {
          scoreTypes.map(scoreType => 
            <fieldset key={scoreType.id}>
              <legend>{scoreType.text} ({this.state[scoreType.id].score})</legend>
              {
                scoreType.children
                  .map(child => (
                    <ScoreRange
                      key={child.id} 
                      id={child.id} 
                      label={child.text}
                      onChange={(amount, subtype) => this.events.onInputChange(scoreType.id, subtype, amount)} 
                    />))
              }
            </fieldset>
        )

        }
      </div>
    );
  }
}

export default ScoresContainer;
