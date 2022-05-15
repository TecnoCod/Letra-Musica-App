import React from 'react'
import useLetras from '../hooks/useLetras'
import Alerta from './Alerta'
import Formulario from './Formulario'
import { Letras } from './Letras'


const AppLetras = () => {

  const {alerta, letra, cargando} = useLetras()
  return (
    <>
      <header>Busqueda de letras de Canciones</header>
      
      <Formulario/>
      <main>
        {alerta ? <Alerta>{alerta}</Alerta> : 
        letra ? <Letras/>: 
        cargando ? 'Cargando...' : <p className="text-center">Busca letras de tus artistas favoritos</p>}
      </main>
    </>
  )
}

export default AppLetras