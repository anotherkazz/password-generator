import { useState } from 'react'
import { PasswordForm } from './components/PasswordForm'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState()
  const [hasNumbers, setHasNumbers] = useState(true)
  const [hasSymbols, setHasSymbols] = useState(true)

  return (
    <div className="App">
      <PasswordForm />
    </div>
  )
}

export default App
