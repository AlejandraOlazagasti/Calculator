import React from 'react'
import '../stylesheets/Button.css'

const Button = (props) => {

  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }

  return (
    <div className={`button-container ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )
}

export default Button