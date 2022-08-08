import React from 'react'
import '../stylesheets/ClearButton.css'

const ClearButton = (props) => {
  return (
    <div className='boton-clear' onClick={props.manejarClear}>
      Clear
    </div>
  )
}

export default ClearButton