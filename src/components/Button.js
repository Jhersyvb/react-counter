import React from 'react'

const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <button onClick={handleClick}>{increment > 0 ? '+' : ''}{increment}</button>
}

export default Button
