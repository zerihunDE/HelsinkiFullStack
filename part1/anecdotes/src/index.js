import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0))
    const nextAnecdotes=()=>{
        let randNum =  Math.floor(Math.random() * Math.floor(6))
        setSelected(randNum)
    }
    const vote =()=>{
        const votesCopy = [...votes]
        votesCopy[selected]+=1
        setVotes(votesCopy)
    }
    return (
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]}
            <div>has {votes[selected]} votes</div>
            <button onClick={vote}>vote</button>
            <button onClick={nextAnecdotes}>next anecdotes</button>
            <h1>Anecdote with the most votes</h1>
            {props.anecdotes[votes.indexOf(Math.max(...votes))]}
            <div> has {Math.max(...votes)} votes</div>
        </div>
    )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));


