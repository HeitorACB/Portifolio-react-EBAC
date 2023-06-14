import styled, { createGlobalStyle } from 'styled-components'

import { Theme } from './temas/dark'

const EstiloGlobal = createGlobalStyle`
*{
  margin:0 ;
  padding:0 ;
  font-family: 'Inter', sans-serif;
  list-style: none;
  text-decorantion: none;
}

body{
  padding-top: 86px;
  padding-bottom: 86px;
  background-color:  ${(props) => (props.theme as Theme).corDeFundo};

  @media (max-width: 768px){
    padding-top:16px;
  }
}

`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
