import React from 'react'

export default function Die(props) {
  return (
    <div className="Die-contaniner">
      <button>{props.value}</button>
    </div>
  )
}

