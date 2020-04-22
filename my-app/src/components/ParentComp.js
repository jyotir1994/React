import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoDemo from './MemoDemo'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: ''
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'ABC'
            })
        }, 2000)
    }
    
    render() {
        return (
            <div>
              Parent Componenet 
              <MemoDemo name={this.state.name}/>
              {/* <RegComp /> */}
              {/* <PureComp />  */}
            </div>
        )
    }
}

export default ParentComp
