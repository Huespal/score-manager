import React, { 
  Component, 
  Fragment 
} from 'react';
import './ScoreRange.css';

class ScoreRange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 50
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { 
      id, 
      onChange 
    } = this.props;
    this.setState({
      value: event.target.value
    });

    onChange(event.target.value, id);
  }

  render() {
    const {
      id,
      label
    } = this.props; 
    const { value } = this.state; 
    return (
      <Fragment>   
        <label htmlFor={id}>{label} ({value}) </label>
        <input type="range" id={id} name={id}
        min="0" max="100" onChange={this.handleChange}/>
      </Fragment>
    );
  }
};

export default ScoreRange;
