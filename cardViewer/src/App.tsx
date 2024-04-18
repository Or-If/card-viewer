import { useEffect, useState } from 'react'
import './App.css'

interface cardDisplay {
  name: string;
  manaCost: string;
  text: string;
}


function App() {

  const [searchPhrase, setSearchPhrase] = useState('Alesha who smiles');
  const [displayCard, setDisplayCard] = useState<cardDisplay>({name: "", manaCost: "", text: ""});

  useEffect(() => {
    console.log("something is happening")
      const getCardData = async () => {
        try {
          const request = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${searchPhrase.replace(" ", "+")}`)
          const data = await request.json();
          data.then(setDisplayCard({name: data.name, manaCost: data.mana_cost, text: data.oracle_text}));
        }
        catch {(error : any) => { // next step is to establish a system for errors
          console.log(error)
        }
        }
      }
      getCardData();
  }, [searchPhrase])

  return (
    <>
      <input 
        id='inputText' 
        >
      </input>
      <button 
        onClick={() => {
          setSearchPhrase((document.getElementById("inputText") as HTMLInputElement).value)
        }}
      >Search</button>
      <p>{displayCard.name}</p>
      <p>{displayCard.manaCost}</p>
      <p>{displayCard.text}</p> 
    </>
  )
}

export default App