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
  <h1 style={{textAlign: 'center', marginBottom: '4px', color: '#00159e'}}>NASA Technology</h1>
  <Container>
    <Card
  img="https://images7.kabum.com.br/produtos/fotos/sync_mirakl/615577/xlarge/Notebook-Gamer-Acer-Nitro-V-Intel-Core-i7-13-Gen-16GB-SSD-512GB-RTX4050-Tela-15-6-Full-HD-Linux-Gutta-Anv15-51-7037_1751663078.jpg"
  titulo="Notebook Gamer"
  texto="Acer Nitro V"
/>

<Card
  img="https://images8.kabum.com.br/produtos/fotos/627458/teclado-mecanico-gamer-machenike-k500-b61-rgb-switch-brown-layout-61-teclas-abnt2-cinza-k500-b61_1746534964_gg.jpg"
  titulo="Teclado"
  texto="Mecânico Gamer"
/>

<Card
  img="https://images6.kabum.com.br/produtos/fotos/sync_mirakl/263576/xlarge/Controle-Sem-Fio-Xbox-Pulse-Red-Qau-00066_1753373981.jpg"
  titulo="Controle XBOX"
  texto="Sem Fio - Pulse Red"
/>

  </Container>
  </>
  );
}
export default App;