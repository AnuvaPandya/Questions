import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { countCharacter } from './CountCharacters';

export const CountCharacterComponent = () => {
    const[word, setWord] = useState("");
    const[char, setChar] = useState('');

    return (
    <div style={{backgroundColor: 'red'}}>
        <TextField onChange={(event) => {setWord(event.target.value)}} />
        {/* <TextField onChange={(event) => {setChar(event.target.value)}} /> */}
        <Button onClick={() => alert(JSON.stringify(countCharacter(word)))}>Count Characters</Button>
        {/* <Button onClick={() => alert(JSON.stringify(countCharacter(count[value])))}></Button> */}
    </div>
    )
}