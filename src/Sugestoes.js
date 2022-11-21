import styled from "styled-components"

export default function Sugestoes() {
    return (
        <SugestoesPagina>
            <Titulo>
                Sugestões para você
                <div>Ver tudo</div>
            </Titulo>
            {htmlSugestoes}
        </SugestoesPagina>

    )
}

const Sugestao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 31px;
  margin-bottom: 16px;
`
const Usuario = styled.div`
display: flex;
`
const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 14px;
`
const Texto = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Seguir = styled.div`
  color: #139EF2;
  font-weight: 600;
`
const Nome = styled.div`

`
const Razao = styled.div`
  color: #8E8E8E;
  font-weight: 400;
`
const valoresSugestoes = [
    { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
    { imagem: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
    { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
    { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
    { imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" },
]
const htmlSugestoes = valoresSugestoes.map((props) =>
    <Sugestao>
        <Usuario>
            <img src={props.imagem} />
            <Texto>
                <Nome>{props.nome}</Nome>
                <Razao>{props.razao}</Razao>
            </Texto>
        </Usuario>
        <Seguir>Seguir</Seguir>
    </Sugestao>
)
const SugestoesPagina = styled.div`
`

