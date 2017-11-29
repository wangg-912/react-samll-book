import React,{Component} from "react"
import {render} from "react-dom";
import './css/style.css'
import CommentApp from './comment/commentApp/CommemtApp'


var dom = document.querySelector("#root");
render(<CommentApp/>, dom);

