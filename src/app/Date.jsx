import React, { Component } from 'react'
export default class Clock extends Component{
    constructor() {
        super();
        this.state = {
            date:new Date()
        }
    }
    
    componentWillMount() {
        this.timer = setInterval(() =>{
            this.setState({date:new Date})
        },1000)
    }
    
    render(){
        return(
            <div>
            <h1>当前时间是：</h1>
            {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}