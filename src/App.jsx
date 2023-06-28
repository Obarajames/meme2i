import { useState } from 'react'
import Header from './header'
import Meme from './meme'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Header/>
     <Meme/>
     
    </>
  )
}

export default App
