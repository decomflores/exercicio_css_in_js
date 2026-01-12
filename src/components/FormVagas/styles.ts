import styled from 'styled-components'

// Usar styled('tag') ajuda o TypeScript a reconhecer os atributos nativos
export const FormEstilizado = styled('form')`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 16px;
  }
`

export const Campo = styled('input')`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.corPrincipal};
  border: 1px solid ${(props) => props.theme.corPrincipal};
  height: 40px;
  border-radius: 4px;
`

export const BotaoPesquisar = styled('button')`
  background-color: ${(props) => props.theme.corPrincipal};
  border: 1px solid ${(props) => props.theme.corPrincipal};
  height: 40px;
  padding: 0 32px;
  margin-left: 8px;
  cursor: pointer;
  color: ${(props) => props.theme.corSecundaria};
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 16px;
  }
`
