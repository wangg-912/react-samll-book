import React, { Component } from 'react'

export default class Header extends Component {
    constructor() {
       super()
       console.log("constructor") 
    }
    
    componentWillMount() {
        console.log('component Will Mount')
    }
    componentDidMount() {
        console.log('component Did Mount')
    }
    
    componentWillUnmount() {
        console.log('component will unmount')
    }
    
    render(){
        console.log('render');
        return(
            <div>
            <h1>small books</h1>
            </div>
        )
    }
}