import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statstics =(props)=>{
    const sum = props.good + props.neutral + props.bad
    const average = ((props.good*1) + (props.bad*-1))/sum
    const positive = ((props.good)/sum)*100
    if(sum===0){
        return(
            <div></div>
        )
    }
    return( 
        <table>
            <tbody>
                <Statstic text="good"  value={props.good}/>
                <Statstic text="neutral" value={props.neutral}/>
                <Statstic text="bad" value={props.bad}/>
                <Statstic text="all" value={sum}/>
                <Statstic text="average" value={average}/>
                <Statstic text="positive" value={positive +'%'}/>
            </tbody>   
        </table> 
    )
}

const Statstic = ({text,value})=>{
    return(
        <tr>
            <td>{text}</td> 
            <td>{value}</td> 
        </tr>      
    )
}

const Button = (props)=>{
    return(
        <button onClick = {props.handleClick}>{props.text}</button>
    )
}    


const App = () => {
  // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [count, setCount] = useState([])

    const handleGood =()=>{
        setGood(good+1)
        setCount(count.concat(1))
    }

    const handleNeutral =()=>{
            setNeutral(neutral+1)
            setCount(count.concat(0))
    }
  
    const handleBad =()=>{
            setBad(bad+1)
            setCount(count.concat(-1))
    }

    const total = count.length
    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGood} text='good'/>
            <Button handleClick={handleNeutral} text='neutral'/>
            <Button handleClick={handleBad} text='bad'/>
            <h1>statstics</h1>
            <Statstics good={good} bad={bad} neutral={neutral}/>
            
        </div>
    )
}

ReactDOM.render(<App />, 
    document.getElementById('root')
)