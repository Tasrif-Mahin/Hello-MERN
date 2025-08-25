import React from 'react'
import axios from "axios";
import { useState } from 'react'
import { useEffect } from 'react';

const App = () => {

    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
      axios.get("http://localhost:5000/api/hello")
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage("Failled to fetch from backend"))
    },[])

  return (
    <div style={{fontFamily: "sans-serif", padding: '2rem'}}>
      <h1>{message}</h1>
      <p>Frontend: React @ localhost:5173</p>
      <p>Backend: Express @ localhost:5000</p>
    </div>
  )
}

export default App