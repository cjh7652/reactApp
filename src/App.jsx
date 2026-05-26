import { useState} from 'react'
import './App.scss'
import Modal from './components/Modal'

function App() {
    
    const [blog, setBlog] = useState(['가산디지털단지 맛집','강남 맛집','신림맛집','피자','콜라','호식이' ])
    const [cnt, setCnt] = useState(0)
    const [modal, setModal] = useState(false)
 

  return (
    <div className='App'>
        <div className="black-nav">
            <h4>블로그 만들거예요</h4>
        </div>
        <button onClick={() => {
            let copy=[...blog];
            copy[0] ='구로맛집';
            setBlog(copy)
        }}>
            글수정
        </button>
        <div className="list">
            <h4>{blog[0]} <span onClick={()=>{setCnt(cnt+1)}}>👍</span>{cnt}</h4>
            <h4>글제목</h4>
            <p>5월 26일 발행</p> 
        </div>
        <div className="list">
            <h4>{blog[1]}</h4>
            <h4>글제목</h4>
            <p>5월 26일 발행</p> 
        </div>
        <div className="list">
            <h4>{blog[2]}</h4>
            <h4 onClick={() =>{setModal(!modal)}}>글제목</h4>
            <p>5월 26일 발행</p> 
        </div>
       {
         modal==true ? <Modal/> : null
       }
       {
        blog.map(function(a){
            return (
                 <div className="list">
                    <h4>{a}</h4>
                    <h4 onClick={() =>{setModal(!modal)}}>글제목</h4>
                    <p>5월 26일 발행</p> 
                </div>
            )
        })
       }
    </div>
  )
}

export default App
