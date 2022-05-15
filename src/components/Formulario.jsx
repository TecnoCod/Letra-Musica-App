import React, { useState, useEffect } from 'react';
import useLetras from '../hooks/useLetras';



const Formulario = () => {

  const {setAlerta, busquedaLetra} = useLetras()
  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: ''
  });

  const hanledSubmit = e => {
    e.preventDefault();
    if(Object.values(busqueda).includes('')){
      setAlerta('Coloca el nombre del Artista y Canción')
      return
    }
    busquedaLetra(busqueda)
  }


  return (
    <form
      onSubmit={hanledSubmit}
    >
      <legend>Busca por Artista y Canción</legend>

      <div className="form-grid">
        <div>
          <label>Artista</label>
          <input 
          type="text" 
          name="artista" 
          placeholder="Busca Artista"
          value={busqueda.artista}
          onChange={e => setBusqueda(
            {
              ...busqueda,
              [e.target.name] : e.target.value
            }
          )}
          />
        </div>
        <div>
          <label>Canción</label>
          <input 
          type="text" 
          name="cancion" 
          placeholder="Busca Canción"
          value={busqueda.cancion}
          onChange={e => setBusqueda(
            {
              ...busqueda,
              [e.target.name] : e.target.value
            }
          )}
          />
        </div>

        <input type="submit" value="Buscar" />
      </div>
    </form>
  )
}

export default Formulario