import React from 'react'
import { Link } from 'wouter'
import './Gif.css'

export default function Gif({ title, url, id }) {
  return (
    <div className='gif'>
      <Link className="gif-link" to={`/gif/${id}`}>
        <img alt={title} src={url} />
        <h2>{title}</h2>
      </Link>
    </div>
  )
}
