import React from "react";

class Odometer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 0
    
    };
    this.handleClicks = this.handleClicks.bind(this);
  }
  handleClicks(increment) {
    let meter = this.state.distance + increment;
    if(meter < 0){
        meter = this.state.distance
    } else if(meter > 9999){
        meter = meter - 10000; 
    }
    this.setState({
      distance: meter

    });
  }
  pad(num, length) {
    length = 4
    return num.toString().padStart(length, 0);
  }
    
  render() {
    return (
      <React.Fragment>
        <h2>OdMeTeR</h2>
        <div>distance: {this.pad(this.state.distance)}</div>
        <div>
        <button onClick={this.handleClicks.bind(this, 1)}> Add 1 </button>
        <button onClick={this.handleClicks.bind(this, - 1)}> Sub 1 </button>
        <button onClick={this.handleClicks.bind(this, 10)}> Add 10 </button>
        <button onClick={this.handleClicks.bind(this, -10)}> Sub 10 </button>         
        <button onClick={this.handleClicks.bind(this, 100)}> Add 100</button>
        <button onClick={this.handleClicks.bind(this, -100)}> Sub 100</button>
        <button onClick={this.handleClicks.bind(this, 1000)}> Add 1000</button>
        <button onClick={this.handleClicks.bind(this, -1000)}> Sub 1000</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Odometer;