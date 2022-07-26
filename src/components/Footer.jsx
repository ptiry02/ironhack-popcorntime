import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <h1>This is the footer</h1>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  bottom: 0;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
