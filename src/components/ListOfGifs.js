import React from 'react'
import Gif from 'components/Gif'
import './ListOfGifs.css'

export default function ListOfGifs({ gifs }) {
  
  return <div className='ListOfGifs'>
    {gifs.map(({ id, title, url }) => {
      return <Gif
        key={id}
        id={id}
        title={title}
        url={url} />
    })}
  </div>
}
