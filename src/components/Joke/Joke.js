import React, {Component} from 'react';
import './Joke.css';

class Joke extends Component {

    render() {
        return (
            <div className="Joke">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Joke;