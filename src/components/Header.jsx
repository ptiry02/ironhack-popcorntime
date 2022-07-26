import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <h1>This is the header</h1>
    </Wrapper>
  )
}
export default Header

const Wrapper = styled.div`
  width: 100vw;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
