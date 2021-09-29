import './App.css';
import React from 'react';
import { useState } from 'react';
import { Palindrome } from './Palindrome';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

// import { Input } from '@mui/material';

function App() {
  
  //Use state galat use kar rakha hai, is selected part ke i.e. useState(value) value ki jagah kuch string number hona thaa jo actually const[value, setValue] iski value me store hota
  
  const [word, setWord] = useState("");
  // const ariaLabel = { 'aria-label': 'description' };
  return (
    <div>
      <form>
        <label>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" 
        onChange={(event) => {setWord(event.target.value)}} />
        <Button variant="outlined"
        onClick={()=> alert(Palindrome(word) == true ? "Palindrome" : "Not a Palindrome") }>Check</Button>
        <div>{word} is a palindrome ??????</div>
        <div>{Palindrome(word).toString()}</div>
        </label>
      </form>
    </div>
  );
}

export default App;
