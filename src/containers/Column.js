import React from 'react';
import '../App.css';
import Square from './Square';


class Column extends React.Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            squares: []
        }
    }

    componentDidMount() {
        let all = this.renderSquares();
        this.setState({squares: all});
    }


    handleClick() {
        let {board} = this.props;
        var i ;

        let currRow = 0;
        let currCol = 0;

        var passColor = "red";

        for (i = board.length-1; i >= 0;i--) {
            if (board[i][this.props.currentIndex] === 'E') {
                let color = this.props.currPlayer === "red" ? "R": "Y";
                passColor = color === "R" ? "red": "yellow";
                currRow  = this.props.currentIndex;
                currCol = i;
                board[i][this.props.currentIndex] = color;
                this.props.update(board);
                break;
            }
        }

        let newSquares =this.state.squares.map((square) => {
            let row = parseInt(square.key.slice(0,1));
            let col = parseInt(square.key.slice(2));
            if (currRow === row && currCol === col) {
                return <Square key={square.key} color={passColor} callBack={square.props.callBack} update={square.props.update}/>
            }
            else {
                return square
            }
        });
        this.setState({squares: newSquares});



    }

    renderSquares() {

        var i;
        //[Square,Square,Square]
        var allSquares = this.state.squares;
        for (i = 0; 6 > i; i++) {
            let column = this.props.currentIndex;
            let keyVal = column + "-" + i;
            allSquares.push(<Square key={keyVal}
                                    callBack={this.handleClick}
            update={this.props.update}/>);
        }
        this.setState({squares: allSquares});
        return allSquares;
    }

    render() {
        return (
            <div>
                {this.state.squares}
            </div>
        )
    }

}

export default Column;
