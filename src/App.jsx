import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componenets/Header/Header'
import Content from './componenets/Content/Content'
import BlogQuestionAnswer from './componenets/BlogQuestionAnswer/BlogQuestionAnswer'
import Toast from './componenets/Toast/Toast'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App main-container">
      <Header></Header>
      <Content></Content>
      <BlogQuestionAnswer></BlogQuestionAnswer>
      <Toast></Toast>
    </div>
  )
}

export default App
