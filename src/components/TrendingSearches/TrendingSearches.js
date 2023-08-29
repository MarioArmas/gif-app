import React, { useState, useEffect } from 'react'
import Category from 'components/Category'
import getTrendingGifs from 'services/getTrendingGifs'

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(function() {
    getTrendingGifs().then(setTrends)
  }, [])

  return <Category name='Tendencias' options={trends} />
}