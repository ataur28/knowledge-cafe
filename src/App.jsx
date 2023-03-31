import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componenets/Header/Header'
import Content from './componenets/Content/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App main-container">
      <Header></Header>
      <Content></Content>
    </div>
  )
}

export default App
