import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import kings from './kings'
import queens from './queens'
import titles from './titles'

const MonarchWelcome = styled.div`

/* @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Grenze+Gotisch&display=swap'); */

display:flex;
justify-content:center;
align-content:center;
font-family: 'Grenze Gotisch', cursive;
font-size:7rem;
margin:2% auto;
padding: 2.5% 0;
background-color:black;
color:ivory;
width:100%;
max-width:100%;
letter-spacing: 4px;
`

const ButtonDeco = styled.button`
    background-color:black;
    font-family: 'Grenze Gotisch', cursive;
    color:ivory;
    padding:2%;
    width:15%;
    font-size:2.5rem;
    border-radius:5%;
    margin:5%;
`
const StyledQueen = styled.div`

    font-family: 'Lora',cursive;
    color:black;
    font-size:6rem;
    display: flex;
    justify-content:center;
    align-content:center;
    text-align:center;

`

const StyledKing = styled.div`

    font-family: 'Lora', cursive;
    color:black;
    font-size:6rem;
    display: flex;
    justify-content:center;
    align-content:center;
    text-align:center;

`

const ButtonContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:2%;
`

function App() {

    const [kingName] = useState(kings);
    const [queenName] = useState(queens);
    const [surName] = useState(titles);

    let newKing = kingName[Math.floor(Math.random() * kingName.length)];

    let newQueen = queenName[Math.floor(Math.random() * queenName.length)];

    let newTitle = surName[Math.floor(Math.random() * surName.length)];



    return (
        <div>
        <MonarchWelcome>Monarch Generator</MonarchWelcome>
        <StyledKing>{newKing} {newTitle}</StyledKing>
    <StyledQueen>{newQueen} {newTitle}</StyledQueen>
        <ButtonContainer>
        <ButtonDeco>Generate New King</ButtonDeco>
        <ButtonDeco>Generate New Queen</ButtonDeco>
        </ButtonContainer>
        </div>
    )
}

export default App;