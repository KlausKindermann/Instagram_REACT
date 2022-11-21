import styled from "styled-components"
import { useState } from "react";

export default function Usuario() {

const [nome, setNome] = useState("Catanacomics")
const [imagem, setImagem] = useState("https://img1.gratispng.com/20180325/buq/kisspng-user-profile-get-em-cardiovascular-disease-zingah-avatar-5ab7520468bc16.870439461521963524429.jpg")

function mudarNome(){
    const novoNome = prompt("Digite um novo nome!")
    setNome(novoNome)
}
function mudarImagem(){
    const novaImagem = prompt("Insira o link da nova imagem!")
    setImagem(novaImagem)
}
    return (
        <UsuarioPagina>
            <img onClick={mudarImagem} src={imagem} alt="imagem de usuário" />
            <Texto>
                <strong>Catanacomics</strong>
                <span>
                    {nome}
                    <ion-icon onClick={mudarNome} name="pencil"></ion-icon>
                </span>
            </Texto>
        </UsuarioPagina>
    )
}

const UsuarioPagina = styled.div`
  display: flex;
  align-items: center;
  img{
    width: 56px;
    height: 56px;
    border-radius: 50%;
    }
`
const Texto = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  font-weight: 300;
  color: #8E8E8E;
  strong{
    font-weight: 500;
    color: #262626;
    }
`
