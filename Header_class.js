import React from 'react'

class Header_class extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={count:5}
    }
    low=()=>{
        this.setState((prevstate)=>({
            count:prevstate.count-1,
        }))
    }
    render()
    {
        return(
            <div>
                <button onClick={this.low}>Decrement</button>
                <span>{this.state.count}</span>
                
            </div>
        )
        }
    }

    export default Header_class
import React from 'react'

function Header() {
    const[counts,setCount]=useState(0);
function high()
{
    setCount(counts+1);
}
  return (
    <div>
        <button onClick={high}>Increment</button>
        <span>{counts}</span>
        </div>
  )
}

export default Header_class
