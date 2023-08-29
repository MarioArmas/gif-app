import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'

const POPULAR_GIFS = ['Matrix', 'panda']

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs({ keyword })

  const handleSumbit = (evt) => {
    evt.preventDefault() // important to not recharge the page
    // navegate to another route
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSumbit}>
        <input onChange={handleChange} type="text" value={keyword} />
        <button>Buscar</button>
      </form>
      <h3 className='App-title'>Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs mas populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => {
          return (
            <li key={popularGif}>
              <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
            </li>
          )
        })}
      </ul>
      {/* <h3 className='App-title'>Tendencias</h3> */}
      <TrendingSearches />
    </>
  )
}
