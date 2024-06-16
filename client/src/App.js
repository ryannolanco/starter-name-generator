import React, { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState([])

  seEffect(() => {
    fetch('https://starter-name-generator-1-krta.onrender.com') // Change this URL to the one that you just deployed
    .then((res) => res.json())
    .then((name) => setName([name]))
  }, [])
  return (
    <h1>{name}</h1>
  )
}

export default App
