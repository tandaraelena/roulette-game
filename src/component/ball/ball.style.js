import styled from 'styled-components'

export const StyledBall = styled.div`
  width: 30px;
  height: 130px;
  position: absolute;
  top: 50px;
  left: 155px;
  transform: rotate(20deg);
  transform-origin: 50% 100%;
  animation: spin 5s ease-out forwards;

  &::after{
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 30px;
    height: 30px;
    background-color: grey;
    border-radius: 50%;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(1440deg); }
  }
`
