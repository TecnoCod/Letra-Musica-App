import React from 'react'
import useLetras from '../hooks/useLetras'

export const Letras = () => {

  const {letra, cargando} = useLetras()
  return (
    cargando ? 'Cargando...' :
    <div className="letra">{letra}</div>
  )
}
