import styled from "styled-components"

export default function Stories() {
    return (
        <StoriesPagina>
            {htmlStories}
            <Setinha>
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </Setinha>
        </StoriesPagina>
    )
}

const StoriesPagina = styled.div`
    display: flex;
    align-items: center;
    height: 118px;
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    padding: 0 18px;
    overflow: hidden;
    position: relative;
`
const Setinha = styled.div`
    position: absolute;
    right: 10px;
    top: 45px;
    height: 32px;
    width: 32px;
    color: #FFF;
    font-size: 28px;
    cursor: pointer;
`
const Story = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 14px 0;
    font-size: 12px;
    cursor: pointer;
    margin-right: 10px;
    `
const Imagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 66px;
    width: 66px;
    background-image: url('../assets/img/story-circle.svg');
        img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
        }
    `
const Usuario = styled.div`
    width: 66px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    height: 14px;
`
const infoStories = [
    { imagem: "assets/img/9gag.svg", usuario: "9gag" },
    { imagem: "assets/img/meowed.svg", usuario: "meowed" },
    { imagem: "assets/img/barked.svg", usuario: "barked" },
    { imagem: "assets/img/nathanwpylestrangeplanet.svg", usuario: "athanwpylestrangeplanet" },
    { imagem: "assets/img/wawawicomics.svg", usuario: "wawawicomics" },
    { imagem: "assets/img/respondeai.svg", usuario: "respondeai" },
    { imagem: "assets/img/filomoderna.svg", usuario: "filomoderna" },
    { imagem: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet" },
]

const htmlStories = infoStories.map((props) =>
    <Story>
        <Imagem>
            <img src={props.imagem} />
        </Imagem>
        <Usuario>
            {props.usuario}
        </Usuario>
    </Story>
)
