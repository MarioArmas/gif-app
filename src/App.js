import React from 'react'
import { Link, Route } from 'wouter'
import Home from 'pages/Home'
import SearchResults from 'pages/SearchResults'
import Detail from 'pages/Detail'
import { GifsContextProvider } from 'context/GifContext'
import 'App.css'


export default function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/'>
          <h1 className='main-title'>Gif app</h1>
          {/* <img className='App-logo' alt='Giffy logo' /> */}
        </Link>
        <GifsContextProvider>
          <Route component={Home} path='/' />
          <Route component={SearchResults} path='/search/:keyword' />
          <Route component={Detail} path='/gif/:id' />
        </GifsContextProvider>
      </section>
    </div>
  )
}
