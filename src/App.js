import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [catsApi, setCatApi] = useState([])
  const url = "https://cat-fact.herokuapp.com/facts"

  const fetchApi = async () =>{
    const response = await fetch(url)
    console.log("response: ", response.status)
    const responseJSON = await response.json()
    setCatApi(responseJSON)
    console.log(responseJSON)
  }
  useEffect( ()=> {
    fetchApi()
  }, [])
  return (
    <div className='ContainerFacts' >
      {!catsApi ? (
        <p>loading...</p>
      ): (
        catsApi.map((fact, i) => {
          return <div className='Fact' key={i}>{fact.text}</div>
        })
      )}
    </div>
  );
}

export default App;
