import { FC } from 'react'
import './App.scss'

const App: FC<{ title: string }> = (props) => {
  return (
    <div className='App'>App {props.title}</div>
  )
}

export default App