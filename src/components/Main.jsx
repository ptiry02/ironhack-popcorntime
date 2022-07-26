import { useState } from 'react'
import styled from 'styled-components'
import moviesArray from '../json/movies.json'
import Movie from './Movie'

const Main = () => {
  const [movies, setMovies] = useState(moviesArray)

  const deleteHandler = (movieId) => {
    setMovies(movies.filter((movie) => movieId !== movie.id))
  }
  return (
    <Wrapper>
      {movies.map((mov, i) => (
        <Movie key={i} mov={mov} remove={deleteHandler} />
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
