import Titulo from "../../components/Título";
import { P } from "../../components/Paragrafo/styles";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <P tipo = "principal">
      Me chamo Pedro, sou formado em Engenharia Elétrica pela Georgian College no Canadá. Engenheiro full-stack a procura de desafios e idéias que possam ajudar no ambiente de desenvolvimento.
    </P>
    <GithubSecao>
      <img  src="https://github-readme-stats.vercel.app/api?username=pedrootaviano&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=pedrootaviano&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)

export default Sobre
