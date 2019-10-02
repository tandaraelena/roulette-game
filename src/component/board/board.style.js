import styled from 'styled-components'

export const StyledBoard = styled.div`
  color: red;
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: grey;
`
