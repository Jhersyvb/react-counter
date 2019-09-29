import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'

import './styles.css'

function App() {
  const [count, setCount] = useState(0)
  const [results, setResults] = useState([])

  const incrementCount = increment => {
    setCount(count + increment)
  }

  const resetCount = () => {
    setCount(0)
  }

  const saveResult = () => {
    setResults(results.concat({
      id: results.length,
      value: count
    }))
    setCount(0)
  }

  return (
    <div className="App">
      <p>
        <Button increment={1} onClickFunction={incrementCount} />
        <Button increment={10} onClickFunction={incrementCount} />
        <Button increment={100} onClickFunction={incrementCount} />
        <Button increment={1000} onClickFunction={incrementCount} />
      </p>
      <div>
        {count} <button type="button" onClick={resetCount}>Reset</button>
        <button type="button" onClick={saveResult}>Save</button>
      </div>
      <p>
        <Button increment={-1} onClickFunction={incrementCount} />
        <Button increment={-10} onClickFunction={incrementCount} />
        <Button increment={-100} onClickFunction={incrementCount} />
        <Button increment={-1000} onClickFunction={incrementCount} />
      </p>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.value}</li>
        ))}
      </ul>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
