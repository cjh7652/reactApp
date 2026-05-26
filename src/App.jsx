import {useState} from 'react'
import './App.scss'
import MyComponent from './MyComponent'
function App() {
    let post="가산디지털단지 맛집"
    const [message, setMessage] = useState('안녕')
  return (
    <div className='App'>
        <div className="black-nav">
            <h4>블로그 만들거예요</h4>
        </div>
        <div className="blogBody">
            <h4 style={{fontSize:'18px'}}>{post}</h4>

            <MyComponent name="리액트" a="바보"/>
        </div>
        <button onClick={()=>setMessage('어서오세요')}>입장</button>
        <button onClick={()=>setMessage('안녕히 가세요')}>퇴장</button>
        <h2>{message}</h2>
        <p>dksldkfjlws</p>
    </div>
  )
}

export default App
