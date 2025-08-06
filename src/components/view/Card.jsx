import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgb(255, 0, 0);
    padding: 20px;
    width: 100%
    max-width: 300px;
    text-align: center;
    transition: 0.3s;
&:hover{
    transform: scale(1.05);
};
`
const Img = styled.img`
    width: 100%;
    border-radius: 10px;
`;
const Titulo = styled.p`
    margin: 15px 0;
`
const Texto = styled.p`
    font-size: 14px;
    color: #00000;
`
export default function Card({ img, titulo, texto }) {
  return (
    <CardContainer>
      <Img src={img} />
      <Titulo>{titulo}</Titulo>
      <Texto>{texto}</Texto>
    </CardContainer>
  );
}