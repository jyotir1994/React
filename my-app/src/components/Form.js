import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: '',
            topic: '',
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value  
        })
    }

    handleSubmit = event => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault()
    }

    render() {
        return (
            <form>
                <div>
                    <label>UserName</label>
                    <input
                        type='text'
                        value={this.state.userName}
                        onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                        value={this.state.comments}
                        onChange={this.handleCommentsChange} />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div>
            <button type='submit' onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default Form
