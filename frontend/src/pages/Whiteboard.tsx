// import React from 'react'
import Canvas from "../components/Canvas"
import "../styles/Whiteboard.scss"

function Whiteboard() {
  return (
    <main id='Whiteboard'>
      <div id="top-section">
        <div id="left">
          <h1>Boardy</h1>
        </div>
        <div id="right">
          <i className='bi bi-clipboard-fill icon'></i>
          <i className='bi bi-people-fill icon'></i>
          <button className='btn btn-danger'>Leave</button>
        </div>
      </div>
      <Canvas />
    </main>
  )
}

export default Whiteboard