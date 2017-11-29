import React, { Component } from 'react';
import Header from './Header';
import Clock from './Date';

export default class Index extends Component{
    constructor() {
        super();
        this.state = {
            isShowHeader: true
        }
    }
    showHandleTitle(){
        this.setState({
            isShowHeader:!this.state.isShowHeader
        })
    }
    render(){
        return(
            <div>
            <Clock />
            <button type="button" className="btn btn-large btn-block btn-default" onClick={this.showHandleTitle.bind(this)}>显示或隐藏</button>
            {this.state.isShowHeader ? <Header /> : null}
            </div>
        )
    }
}

