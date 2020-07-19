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
    margin:7% auto;

    @media(max-width:375px){
        font-size:5rem;
        margin:10% auto;
    }


    @media(max-width:768px){

    }

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


    @media(max-width:375px){
        padding:1%;
        margin:auto;
        margin-top:7.5%;
        width:40%;
        font-size:1rem;
    }

    @media(max-width:500px){
        width:30%;
        padding:1%;
        margin:auto;
        font-size:2rem;
        margin-top:7.5%;
    }


    @media(max-width:800px){
        width:30%;
        font-size:2.5rem;
    }
`



function ShowButton(props) {
    const [showKing, setShow] = useState(false)
    const [showQueen, setQShow] = useState(false)
    const [showTest, setTest] = useState(false)

    const toggleKingShow = (event) => {
        setShow(true)
        setQShow(false)
    }
  
    const toggleQueenShow = (event) => {
        setQShow(true)
        setShow(false)
    }

    const toggleOn = (event) => {

        if (showTest === false){
            setTest(true)
        } else {
            setTest(false)
        }

    }
  

    if (showKing) {
        
        return (
            <div>
        <StyledMonarch>King {props.newKing[Math.floor(Math.random() * props.newKing.length)]} {props.newTitle[Math.floor(Math.random() * props.newTitle.length)]}</StyledMonarch>
        <ButtonContainer>
        <ButtonDeco onClick={toggleKingShow, toggleOn}>Generate New King</ButtonDeco>
        <ButtonDeco onClick={toggleQueenShow}>Generate New Queen</ButtonDeco>
        </ButtonContainer>
        </div>
        )
    }

    if (showKing && showTest) {

        return (
            <div>
            <StyledMonarch>King {props.newKing[Math.floor(Math.random() * props.newKing.length)]} {props.newTitle[Math.floor(Math.random() * props.newTitle.length)]}</StyledMonarch>
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
            <StyledMonarch>Queen {props.newQueen[Math.floor(Math.random() * props.newQueen.length)]} {props.newTitle[Math.floor(Math.random() * props.newTitle.length)]}</StyledMonarch>
            <ButtonContainer>
        <ButtonDeco onClick={toggleKingShow}>Generate New King</ButtonDeco>
        <ButtonDeco onClick={toggleQueenShow, toggleOn}>Generate New Queen</ButtonDeco>
        </ButtonContainer>
        </div>
        )
    }

    if (showQueen && showTest) {
        return (
            <div>
            <StyledMonarch>Queen {props.newQueen[Math.floor(Math.random() * props.newQueen.length)]} {props.newTitle[Math.floor(Math.random() * props.newTitle.length)]}</StyledMonarch>
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