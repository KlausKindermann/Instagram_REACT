import styled from "styled-components"

export default function Navbar() {
  return (
    <NavbarPagina>
      <Container>
        <Logo>
          <ion-icon name="logo-instagram"></ion-icon>
          <Separador></Separador>
          <img src="assets/img/logo.png" />
        </Logo>

        <Pesquisa>
          <input type="text" placeholder="Pesquisar" />
        </Pesquisa>

        <Icones>
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </Icones>

        <IconesMobile>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </IconesMobile>
      </Container>
    </NavbarPagina>
  )
}

const NavbarPagina = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 54px;
  border-bottom: 1px solid #DBDBDB;
  font-size: 22px;
  background-color: #FFF;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`
const Container = styled.div`
  width: 100%;
  max-width: 935px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
const Icones = styled.div`
margin: 0 5px;
`
const IconesMobile = styled.div`
display: none;
`
const Pesquisa = styled.div`
input{
  width: 215px;
  height: 28px;
  border-radius: 3px;
  background-color:s #FAFAFA;
  border: 1px solid #DBDBDB;
  color: #979797;
  text-align: center;
}
`
const Logo = styled.div`
display: flex;
img{
  position: relative;
  top: 3px;
}
`
const Separador = styled.div`
  width: 1px;
  height: 22px;
  background-color: #DBDBDB;
  margin: 0 10px;
`