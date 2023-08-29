import React, { useCallback, useRef, useEffect } from 'react'
import Loading from 'components/Loading'
import useGifs from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { gifs, loading, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ 
    externalRef: loading ? null : externalRef,
    once: false
  })


  
  // const handleNextPage = () => setPage(prevPage => prevPage + 1)
  // const handleNextPage = () => console.log('next page')

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [])

  useEffect(() => {
    console.log(isNearScreen)
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])
  
  return <>
    {loading
      ? <Loading />
      : <>
        <h3 className="App-title">{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs}/>
        <div id="visor" ref={externalRef}/>
      </>
    }
    {/* <button onClick={handleNextPage}>Get next page</button> */}
  </>
}