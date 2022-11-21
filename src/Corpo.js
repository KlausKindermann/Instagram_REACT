import Posts from "./Posts"
import Sidebar from "./Sidebar"
import Stories from "./Stories"
import styled from "styled-components"

export default function Corpo() {
    return (
        <CorpoPagina>
            <Esquerda>
                <Stories />
                <Posts />
            </Esquerda>
            <Sidebar />
        </CorpoPagina>
    )
}

const CorpoPagina = styled.div`
    display: flex;
    justify-content: space-between;
    width: 935px;
    margin: 0 auto;
    margin-top: 88px;
`
const Esquerda = styled.div`
    width: 100%;
    max-width: 614px;
`