import Image from 'next/image'
import React from 'react'

const Categoria = ({categoria}) => {

  const { nombre, icono, id } = categoria

  return (
    <div className='flex items-center gap-4 w-full border p-5 hover:bg-amber-400'>
      <Image 
        alt='Imagen icono'
        width={100}
        height={100}
        src={`/assets/img/icono_${icono}.svg`}
      />

      <button
        type='button'
        className='text-2xl font-bold hover:cursor-pointer'
      >
        {nombre}
      </button>
    </div>
  )
}

export default Categoria