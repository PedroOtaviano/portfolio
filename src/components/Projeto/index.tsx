import Paragrafo from "../Paragrafo"
import Titulo from "../Título"

import { Card, LinkBotao } from "./style"

const Projeto = () => {
  return(
    <Card>
        <Titulo>Projeto Lista de tarefas</Titulo>
        <Paragrafo tipo="secundario">
          Lista de tarefas feita com VueJS
        </Paragrafo>
        <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
