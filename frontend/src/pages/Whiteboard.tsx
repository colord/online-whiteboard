// import React from 'react'
import Canvas from "../components/Canvas"
import "../styles/Whiteboard.scss"
import { createPopper } from '@popperjs/core';
import { useRef, useEffect } from "react";

function Whiteboard() {

  const exitTooltip = useRef<HTMLElement>(null);
  const exitTooltipTitle = useRef<HTMLElement>(null);

  useEffect(() => {
    if (exitTooltip.current === null) {
      return
    }

    /* TODO - figure out error message: 
    Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element | VirtualElement'.
    Type 'null' is not assignable to type 'Element |
    */
    createPopper(exitTooltipTitle.current, exitTooltip.current, {
      placement: 'bottom',
    });
  }, []);

  return (
    <main id='Whiteboard'>
      <div id="top-section">
        <div id="left">
          <h1>Boardy</h1>
        </div>
        <div id="right">
          <i className='bi bi-clipboard-fill icon'></i>
          <i className='bi bi-people-fill icon'></i>
          <i
            ref={exitTooltip}
            className='bi bi-x-lg icon'
            id='exit'>
          </i>
        </div>
      </div>
      <Canvas />
    </main>
  )
}

export default Whiteboard