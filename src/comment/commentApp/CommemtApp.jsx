import React, { Component } from 'react';

import CommentInput  from './../commentInput/CommentInput';
import CommentList from './../commentList/CommentList';


export default class CommentApp extends Component{
    constructor() {
        super();
        this.state = {
            comments:[]
        };
    }
    handleSubmitComment(comment){
        if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
       this.state.comments.push(comment);
       this.setState({
           comments:this.state.comments
       })
    }
    render(){
        return(
            <div>
            <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
            <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}
