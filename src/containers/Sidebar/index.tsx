import Titulo from "../../components/Título"
import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"

import { BotaoTema, Descricao, SidebarContainer } from "./styles"


type Props ={
  trocaTema: () => void;
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar/>
      <Titulo fontSize={20}>Pedro Otaviano</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>pedrootaviano</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Engenheiro full-stack</Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
