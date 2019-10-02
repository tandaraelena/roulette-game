import styled from 'styled-components'

export const StyledSlot = styled.div`
  padding-top: 5px;
  width: 30px;
  text-align: center;
  height: 175px;
  position: absolute;
  display: inline-block;
  margin-left: 160px;
  transform: rotate(${({ rotation }) => rotation}deg);
  transform-origin: 50% 100%;
  color: white;

  &::after{
    content: ${({ number }) => `"${number}"`};
    position: relative;
  }
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 2px;
    border-top: 175px solid ${({ color }) => color};
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
  }
`
