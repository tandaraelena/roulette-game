import styled from 'styled-components'

export const StyledBoardWrapper = styled.div`
  position: relative;
`

export const StyledBoard = styled.div`
  color: red;
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: #C6682A;
  position: relative;

  &::after{
    content: '';
    width: 250px;
    height: 250px;
    top: 50px;
    left: 50px;
    background-color: #faa918;
    position: absolute;
    border-radius: 50%;
  }
`
