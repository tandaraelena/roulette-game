import styled from 'styled-components'

export const StyledSlot = styled.div`
  /* width: 55px; */
  height: 175px;
  position: relative;
  display: inline-block;
  margin-left: 165px;
  transform: rotate(20deg);
  transform-origin: 50% 100%;

  &::after{
    content: ${({ number }) => `"${number}"`};
    color: black;
    position: relative;
  }
  &::before{
    content: '';
    position: absolute;
    top: 0;
    border-top: 175px solid red;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`
