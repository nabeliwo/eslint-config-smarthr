import React, { useState } from 'react'

interface Props {
  initialCount: number
}

const Counter: React.FC<Props> = props => {
  const [count, setCount] = useState(props.initialCount)
  return (
    <main>
      <p className='text'>{count}</p>
      <div>
        <span onClick={() => setCount(count + 1)}>++</span>
        <button onClick={() => setCount(count - 1)}>--</button>
      </div>
      <p children="Text" />
      <div role="unknown" />
    </main>
  )
}
export default Counter
