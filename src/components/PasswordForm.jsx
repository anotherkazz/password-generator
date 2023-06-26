import { useState } from 'react'
export const PasswordForm = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState()
  const [hasNumbers, setHasNumbers] = useState(true)
  const [hasSymbols, setHasSymbols] = useState(true)

  return (
    <form>
      <label>
        パスワードの長さ：
        <label>
          <input
            type="radio"
            value="12"
            name="length"
            onChange={(e) => setLength(e.target.value)}
          />
          12
        </label>
        <label>
          <input
            type="radio"
            value="24"
            name="length"
            onChange={(e) => setLength(e.target.value)}
          />
          24
        </label>
      </label>
      <br />
      <label>
        数字を含める：
        <input
          type="checkbox"
          checked={hasNumbers}
          name="hasNumbers"
          onChange={(e) => setHasNumbers(e.target.checked)}
        />
      </label>
      <br />
      <label>
        記号を含める：
        <input type="checkbox" name="hasSymbols" />
      </label>
      <br />
      <button type="submit">生成</button>
    </form>
  )
}
