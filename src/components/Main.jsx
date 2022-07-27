import { useState } from 'react'
import styled from 'styled-components'
import moviesArray from '../json/movies.json'
import Movie from './Movie'

const Main = () => {
  const [movies, setMovies] = useState(moviesArray)

  const deleteHandler = (movieId, ev) => {
    const conf = window.confirm('Are you sure??')
    if (!conf) return ev.preventDefault()
    setMovies(movies.filter((movie) => movieId !== movie.id))
  }
  return (
    <Wrapper>
      {movies.length > 0 ? <h2>There are {movies.length} movies in our DB</h2> : <h2>There are no movies... 😢</h2>}
      {movies.map((mov) => (
        <Movie key={mov.id} mov={mov} remove={deleteHandler} />
      ))}
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
