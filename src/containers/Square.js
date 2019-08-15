import React from 'react';
import '../App.css';

class Square extends React.Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            color: "#FFF",
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.color !== undefined && nextProps.color !== prevState.color) {
            return {
                color: nextProps.color
            }
        }
        return null;
    }
    componentDidMount() {
        if (this.props.color !== undefined) {
            this.setState({color: this.props.color});
        }
    }

    handleClick() {
        this.props.callBack(this.changeColor);
    }

    render() {
        return (
            <div className="square">
                <div className="circle" onClick={this.handleClick} style={{backgroundColor: this.state.color}}> </div>
            </div>
        )
    }

}

export default Square;
