import React, {Component} from 'react';

class Message extends Component {
    render() {
    return <h1>Welcome {this.props.name} and {this.props.no }</h1>
    }
}

export default Message;