import React, { useState , useEffect } from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:2%;
`

const StyledMonarch = styled.div`

    font-family: 'Lora',cursive;
    color:black;
    font-size:6rem;
    display: flex;
    justify-content:center;
    align-content:center;
    text-align:center;
    margin:5% auto;

`

const ButtonDeco = styled.button`
    background-color:black;
    font-family: 'Grenze Gotisch', cursive;
    color:ivory;
    padding:2%;
    width:15%;
    font-size:2.5rem;
    border-radius:5%;
    margin:2.5%;
    margin-top:1%;
`

function ShowButton(props) {
    const [showKing, setShow] = useState(false)
    const [showQueen, setQShow] = useState(false)
    const toggleKingShow = (event) => {
        setShow(true)
        setQShow(false)
    }
  
    const toggleQueenShow = (event) => {
        setQShow(true)
        setShow(false)
    }
  

    if (showKing) {
        return (
            <div>
        <StyledMonarch>{props.newKing[Math.floor(Math.random() * props.newKing.length)]} {props.newTitle[Math.floor(Math.random() * props.newTitle.length)]}</StyledMonarch>
        <ButtonContainer>
        <ButtonDeco onClick={toggleKingShow}>Generate New King</ButtonDeco>
        <ButtonDeco onClick={toggleQueenShow}>Generate New Queen</ButtonDeco>
        </ButtonContainer>
        </div>
        )
    }

    if (showQueen) {
        return (
            <div>
            <StyledMonarch>{props.newQueen[Math.floor(Math.random() * props.newQueen.length)]} {props.newTitle[Math.floor(Math.random() * props.newTitle.length)]}</StyledMonarch>
            <ButtonContainer>
        <ButtonDeco onClick={toggleKingShow}>Generate New King</ButtonDeco>
        <ButtonDeco onClick={toggleQueenShow}>Generate New Queen</ButtonDeco>
        </ButtonContainer>
        </div>
        )
    }

    return (
        <ButtonContainer>
        <ButtonDeco onClick={toggleKingShow}>Generate New King</ButtonDeco>
        <ButtonDeco onClick={toggleQueenShow}>Generate New Queen</ButtonDeco>
        </ButtonContainer>
    )
}


export default ShowButton;