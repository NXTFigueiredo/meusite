import React from 'react';
import './App.css';           // CSS tradicional
import Botao from './components/Botao';  
import styled from 'styled-components';
import Card from './components/view/Card';
import { GlobalStyle } from './components/styles/styledComponents';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;

  @media(min-width: 768px){
    flex-direction: row;
    justify-content: center;
    gap: 40px;
  }
`
function App() {
  return (
  <>
  <GlobalStyle/>
  <h1 style={{textAlign: 'center', marginBottom: '4px', color: '#fbff00'}}>Carinha de Anjo</h1>
  <Container>
    <Card/>
    <Card/>
    <Card/>
  </Container>
  </>
  );
}
export default App;