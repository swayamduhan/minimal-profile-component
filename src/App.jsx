import { useState } from 'react'
import './App.css'
import { Profile } from './components/Profile'
import { Input } from './components/Input'

function App() {
  const [name, setName] = useState("Swayam Duhan")
  const [age, setAge] = useState(18)
  const [place, setPlace] = useState("Delhi, India")
  return (
    <div className='outer-div'>
      <Profile name={name} age={age} place={place}/>
      <Input setName={setName} setAge={setAge} setPlace={setPlace}/>
    </div>
  )
}

export default App
