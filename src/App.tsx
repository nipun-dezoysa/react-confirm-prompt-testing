import { useState } from 'react'
import './App.css'
import { showConfirm } from './react-melon'

function App() {

  return (
    <>
    <button onClick={()=>showConfirm()}>Show Confirm</button>
    </>
  )
}

export default App
