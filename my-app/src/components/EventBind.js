import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Good Bye!!'
    //     })
    // }


    //property in arrow func
    clickHandler =() => {
        this.setState({
            message: 'Good Bye!!'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  */} {/*binding in render method*/}
                {/* <button onClick={() =>this.clickHandler()}>Click</button> */} {/*arrow function*/}
                <button onClick={this.clickHandler}>Click</button>  {/*binding in constructor and class property in arrow function*/}
            </div>
        )
    }
}

export default EventBind
