import styled from "styled-components";
import { P } from "../../components/Paragrafo/styles";

import { Theme } from "../../themes/light";

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${props => (props.theme as Theme).corBotaoTema};
  font-size: 10px;
  font-weight: bold;
  background-color: ${props => (props.theme as Theme).corPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  left: 0;
  top: 80px;
  @media (max-width: 768px) {
      margin-bottom: 40px;
      text-align: center;
    }
`
