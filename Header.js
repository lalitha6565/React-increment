import React from 'react';

class Header extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={count:0}
    }
    high=()=>{
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }
    render()
    {
        return(
            <div>
                <button onClick={this.high}>increment</button>
                <span>{this.state.count}</span>
                
            </div>
        )
        }
}
export default Header
