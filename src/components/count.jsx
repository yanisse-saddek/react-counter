import React from 'react'
import './css.css'
export class Count extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div className="app">
                <h1>Counter</h1>
                <div className="counter">
                    <p class="score">{this.props.count}</p>
                    <div className="buttons">
                    <button onClick={this.props.count !== 0 ?this.props.substractFunction : " "}>-</button>
                    <button onClick={this.props.addFunction}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}