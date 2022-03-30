import axios from 'axios'
import { useState, useEffect, createContext } from 'react'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({})

  const obtenerCategorias = async () => {
    const { data } = await axios('/api/categorias')
    setCategorias(data)
  }

  const handleClickCategoria = id => {
    const categoria = categorias.filter(cat => cat.id === id)
    setCategoriaActual(categoria[0]);
  }

  useEffect(() => {
    obtenerCategorias()
  }, [])

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria
      }}
    >
      {children}
    </QuioscoContext.Provider>
  )
}

export {
  QuioscoProvider
}

export default QuioscoContext