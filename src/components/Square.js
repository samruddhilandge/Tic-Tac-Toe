import React,{Component} from 'react';

export default function Square(props){
    var color1;
        if(props.value==='X'){
            color1='red';
        }
        else
            color1='darkblue';
        return(
            <button className="square"
             onClick={props.onClick}>
                <span style={{color:color1}}>{props.value}</span>
            </button>
        )
}

