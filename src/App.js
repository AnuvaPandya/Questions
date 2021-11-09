import "./App.css";
import React from "react";
import { useState } from "react";
import { Palindrome } from "./Palindrome";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { CountCharacterComponent } from "./CountCharacterComponent";
import DisplayData from "./DisplayDate";
import { countCharacter } from "./CountCharacters";

function App() {
  // const [number, setNumber] = useState(0);
  return (
    <div>
      <DisplayData />
      {/* <form>
        <label>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={(event) => {
              setWord(event.target.value);
            }}
          />
          <Button
            variant="outlined"
            onClick={() =>
              alert(
                Palindrome(word) == true ? "Palindrome" : "Not a Palindrome"
              )
            }
          >
            Check
          </Button>
          <div>{word} is a palindrome ??????</div>
          <div>{Palindrome(word).toString()}</div>
          <CountCharacterComponent />
        </label>
      </form> */}
    </div>
  );
}
export default App;
