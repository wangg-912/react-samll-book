import React,{Component} from "react"
import {render} from "react-dom";
import './css/style.css'
import Index from './app/Index'


var dom = document.querySelector("#root");
render(<Index />, dom);

