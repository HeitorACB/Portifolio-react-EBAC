import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corborda};
  padding: 16px;
`

export const LinkBotao = styled.a`
  background-color: ${(props) => props.theme.corBotao};
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  display: inline-block;
  margin-top: 24px;
`
