import React, {Component} from 'react';
import CommentSingle from "../commentSingle/CommentSingle";

export default class CommentList extends Component {
    render(){
        return(
            <div>
            {this.props.comments.map((comment,i) => <CommentSingle key={i} comment={comment} />)}
            </div>
        )
    }
}