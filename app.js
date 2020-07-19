import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import kings from './kings'
import queens from './queens'
import titles from './titles'
import Button from './button'

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
       <Button newQueen={queenName} newTitle={surName} newKing={kingName}></Button>
        </div>
    )
    
}

export default App;