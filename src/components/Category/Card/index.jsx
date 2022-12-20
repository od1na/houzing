import React from "react";
import { Container, Icon, Title } from "./styles";
import img from '../../../assets/images/uy-1.png';


export const Card = ({ title, onClick }) => {
  return (
    <Container onClick={onClick} imgUrl={img}>
     <Icon/>
      <Title>    
        {title}
      </Title>

    </Container>
  );
};
export default Card;
