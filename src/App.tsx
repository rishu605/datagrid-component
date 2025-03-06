import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Datagrid from './components/Datagrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Datagrid/>
    </>
  )
}

export default App
