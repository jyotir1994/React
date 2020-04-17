import React, { Component } from 'react'

class UserGreetings extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        return (
                this.state.isLoggedIn &&
                <div>Welcome User</div> )

        // return (
        //     this.state.isLoggedIn ?
        //     <div>Welcome User</div> :
        //     <div>Welcome Guest</div>
        // )

        // let message;
        // if (this.state.isLoggedIn) {
        //     message = 'Welcome User'
        // } else {
        //     message = 'Welcome Guest'
        // }

        // return <div>{message}</div>

        // if(this.state.isLoggedIn) {
        //     return <div>Welcome User</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

    }
}

export default UserGreetings
