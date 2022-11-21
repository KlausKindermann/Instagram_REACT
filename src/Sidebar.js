import styled from "styled-components"
import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function Sidebar() {
    return(
        <SidebarPagina>
            <Usuario />
            <Sugestoes />
            <Links>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </Links>
            <Copyright>
                © 2021 INSTAGRAM DO FACEBOOK
            </Copyright>
        </SidebarPagina>
  )
}

const SidebarPagina = styled.div`
  padding-top: 24px;
  position: sticky;
  top: 88px;
  margin-left: 30px;
`
const Links = styled.div`
  font-size: 11px;
  color: #C7C7C7;
  margin-top: 40px;
`
const Copyright = styled.div`
  font-size: 11px;
  color: #C7C7C7;
  margin-top: 50px;
`