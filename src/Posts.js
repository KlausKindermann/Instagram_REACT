import styled from "styled-components";
import { useState } from "react";

function Post(props) {

  const {
    imagemUsuario,
    nomeUsuario,
    conteudo,
    fotoQuemCurtiu,
    nomeQuemCurtiu,
    contagem,
    jaSalvo,
    jaCurtido
  } = props

  const [curtidas, setCurtidas] = useState(contagem)
  const [salvo, setSalvo] = useState(jaSalvo)
  const [curtido, setCurtido] = useState(jaCurtido)

  function Salvar() {
    setSalvo(!salvo)
  }

  function Curtir() {
    if (!curtido) {
      setCurtidas(contagem + 1)
    } else {
      setCurtidas(curtidas- 1)
    }
    setCurtido(!curtido)
  }

  function CurtirImagem() {
    if (!curtido) {
      setCurtido(true)
      setCurtidas(contagem + 1)
    }
  }

  return (
    <PostsPagina>
      <Topo>
        <Usuario>
          <img src={imagemUsuario} />
          {nomeUsuario}
        </Usuario>
        <Acoes>
          <ion-icon name="ellipsis-horizontal"/>
        </Acoes>
      </Topo>

      <Conteudo>
        <img onClick={CurtirImagem} src={conteudo} />
      </Conteudo>

      <Fundo>
        <FundoAcoes>
          <DivIon>
            {curtido ? (
              <ion-icon onClick={Curtir} class="curtido" name="heart"/>
            ) : (
              <ion-icon onClick={Curtir} name="heart-outline"/>
            )}
            <ion-icon name="chatbubble-outline"/>
            <ion-icon name="paper-plane-outline"/>
          </DivIon>
          <>
            {salvo ? (
              <ion-icon onClick={Salvar} name="bookmark"/>
            ) : (
              <ion-icon onClick={Salvar} name="bookmark-outline"/>
            )}
          </>
        </FundoAcoes>

        <Curtidas>
          <img src={fotoQuemCurtiu} />
          <Texto>
            Curtido por <strong>{nomeQuemCurtiu}</strong> e <strong>outras {curtidas}  pessoas</strong>
          </Texto>
        </Curtidas>
      </Fundo>
    </PostsPagina>
  )
}

export default function Posts() {

  const valoresPost = [
    {
      imagemUsuario: "assets/img/meowed.svg",
      nomeUsuario: "meowed",
      conteudo: "assets/img/gato-telefone.svg",
      fotoQuemCurtiu: "assets/img/respondeai.svg",
      nomeQuemCurtiu: "respondeai",
      contagem: 101523,
      jaSalvo: false,
      jaCurtido: false
    },
    {
      imagemUsuario: "assets/img/barked.svg",
      nomeUsuario: "barked",
      conteudo: "assets/img/dog.svg",
      fotoQuemCurtiu: "assets/img/adorable_animals.svg",
      nomeQuemCurtiu: "adorable_animals",
      contagem: 200541,
      jaSalvo: false,
      jaCurtido: false
    },
  ]

  return (
    <PostsPagina>
      {valoresPost.map((p) => (
        <Post
          nomeUsuario={p.nomeUsuario}
          imagemUsuario={p.imagemUsuario}
          fotoQuemCurtiu={p.fotoQuemCurtiu}
          conteudo={p.conteudo}
          contagem={p.contagem}
        />
      ))}
    </PostsPagina>
  )
}

const PostsPagina = styled.div`
  border-radius: 3px;
  border: 1px solid #DBDBDB;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`
const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 16px;
  font-size: 14px;
  font-weight: 500;
`
const Usuario = styled.div`
  display: flex;
  align-items: center;
  img{
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`
const Acoes = styled.div`
  display: flex;
  align-items: center;
`
const Conteudo = styled.div`
img{
  width: 100%;
}
`
const Fundo = styled.div`
`
const FundoAcoes = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 16px;
  font-size: 24px;
`
const DivIon = styled.div`
`
const Curtidas = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px 13px;
  font-weight: 300;
  img{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`
const Texto = styled.div`
`
