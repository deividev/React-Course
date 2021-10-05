import React, { Component } from 'react';

class ButtonLikes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contadorLikes: 0
        }
    } 

    render() {
        return (
        <div>
            <h2>Likes: {this.state.contadorLikes}</h2>
            <button onClick={this.subirLikes}>Darle a Like</button>
        </div>
        )
    }

   	
    subirLikes = () => {
        this.setState({
            contadorLikes: this.state.contadorLikes + 1
        });
    }
}

export default ButtonLikes;