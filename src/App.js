import './App.css';
import Pokedex from '../src/componets/pokedex.jsx'
import { useEffect, useState } from 'react';

function App() {
  const [pokemonData, setData] = useState();
  const [pokemonId, setPokemonId] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const url = 'https://pokeapi.co/api/v2/pokemon/';


  useEffect(() => {
    fetchData();
  }, [pokemonId]);

  function fetchData(){
    fetch(url + pokemonId)
    .then(response => response.json())
    .then(incommingData => {
      setData(incommingData);
      console.log(incommingData);
      setIsLoading(false);
    })
    .catch(error => {
      setIsLoading(false);
      setError(error);
    })
  }

  function newPokemonId(e){
    const newPokemonId = e.target.value;
    if(newPokemonId){
      setPokemonId(newPokemonId);
    }
    
  }

  if(isLoading){
    return(
      <div className="App">
        website loading!
    </div>
    )
  }else{
    if(error){
      <div className="App">
        <div className='error'>
        Error!
        </div>
      </div>
    }else if (pokemonData){
      return(
        <div className="App">
          <Pokedex pokemonData={pokemonData} e={newPokemonId}/>
      </div>
      )
    }
  }
}



export default App;
