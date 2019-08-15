import React from 'react';
import './App.css';
import Column from './containers/Column';

class App extends React.Component {

  constructor(props) {

    // player 1 needs a color, turn

    super(props);
    this.renderColumns = this.renderColumns.bind(this);
    this.colorChanged = this.colorChanged.bind(this);
    this.state = {
      board: [],
      currPlayer: true,
      currColor : "red",
    }
  }



  colorChanged(board) {
    if (this.state.currColor === "red") {
      this.setState({currColor: "yellow"});
    }
    else {
      this.setState({currColor: "red"});
    }
    this.setState({board:board});
  }

  componentDidMount() {
    //fill board with 6 arrays
    var tempBoard = [];
    var i;
    for (i =0; 6 > i; i++) {
      tempBoard[i] = new Array(7).fill('E');
    }
    this.setState({board: tempBoard});
  }

  renderColumns() {
    var i;
    var allColumns =[];
    for (i = 0; 7 > i; i++) {
      allColumns.push(<Column key={i} currentIndex={i} currPlayer={this.state.currColor}
        update={this.colorChanged}
      board={this.state.board}/>);
    }
    return <div className="column-container">{allColumns}</div>
  }

  render() {
    return (
        <div className="game-container">

          {this.renderColumns()}
        </div>
    );
  }

}

export default App;
