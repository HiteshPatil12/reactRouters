import { useEffect, useState } from "react"

export const Counter = (props) => {
    const [state, setState] = useState(props.count)
    useEffect(()=>{
        document.title=state;
    })
    return(
        <div>
            <p id="count">Count: {state}</p>
            <button onClick={()=>{setState(state+1)}}>Add</button>
            <button onClick={()=>{setState(state-1)}}>Sub</button>
            <button onClick={()=>{setState(props.count)}}>Reset</button>
        </div>
        )
}
Counter.defaultProps = {
    count:0
}