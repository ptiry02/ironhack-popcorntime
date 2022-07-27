import styled from 'styled-components'

const Movie = ({ mov, remove }) => {
  return (
    <Wrapper>
      {mov.imgURL && <img src={mov.imgURL} alt="poster" />}
      <div>
        <h2>Title: {mov.title} </h2>
        <h3>Rating: {mov.rating}</h3>
        <p>year: {mov.year}</p>
        <p>Genres:</p>
        <ul>
          {mov.genres.map((genre, i) => (
            <li key={i}>{genre}</li>
          ))}
        </ul>
        <button onClick={(ev) => remove(mov.id, ev)}>Delete</button>
      </div>
    </Wrapper>
  )
}

export default Movie

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  column-gap: 1rem;
  border: 1px solid black;
  padding: 0.5rem 1.5rem;
  background-color: antiquewhite;
`
