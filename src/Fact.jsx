import React, { useEffect, useState } from 'react'
import { FaCat } from "react-icons/fa";


function Fact() {

    const [fact,setFact] = useState("");    // it will store the fact..

    // now we will create a function to fetch API 
    
    const getFact = () => {   // calls API, gets the data and update the state

        fetch("https://catfact.ninja/fact")  // Calls API that gives random cat facts
        .then(res=>res.json())     // Converts response into JSON format
        .then(data => {  
            setFact(data.fact);    // contains the actual fact and updates the state..
        })
    }

    // now we will use useEffect

    useEffect(() => {
        
        getFact();

    }, []);




  return (
    <div className='container'>
     <h1>Pawsome Cat Facts <FaCat /></h1>
     <button onClick={getFact}>CLICK TO SHOW FACT</button>
     <h2>{fact}</h2>
    </div>
  )
}

export default Fact
