import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={16}>Heitor Augusto</Title>
      <Paragrafo tipo="secundario" fontSize={14}>
        HeitorACB
      </Paragrafo>
      <Descricao tipo="principal" fontSize={14}>
        Desenvolvedor Front-End
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
