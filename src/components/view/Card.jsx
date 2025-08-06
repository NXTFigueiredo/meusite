import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
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
export default function Card(){
  return(
    <CardContainer>
        <Img src ="https://i.pinimg.com/1200x/d1/37/f2/d137f2710c7d457e60e409b53ccc3a99.jpg" />
        <Titulo>Doeu quando você caiu do céu?</Titulo>
        <Texto>Porque você parece um anjo.</Texto>
    </CardContainer>
  )
}