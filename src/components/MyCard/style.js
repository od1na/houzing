import styled from "styled-components"

const Container = styled.div`
  display: flex;
  overflow: hidden;
  width: 1007px;
  height: 113px;
  background: #ffffff;
  /* margin: ${({ margin }) => margin && '0 1em'}; */
  /* margin-bottom: 10px; */
  /* border: 1px solid #e6e9ec; */
  border-radius: 3px;
  background-color: yellow;
  padding: 16px 0 48px 30px;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  `
  
   const CardContainer = styled.div`
    width: 100%;
    padding-left: 30px;
  `;

  export {Container, CardContainer}