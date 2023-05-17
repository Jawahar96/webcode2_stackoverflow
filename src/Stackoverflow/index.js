import React , { useState,useEffect }from 'react'

import './css/index.css'
import Main from './Main'
import Sidebar from './Sidebar'
import './css/Sidebar.css'
import axios from 'axios'


function Index(res) {
  const [question,setQuestion]=useState([])

  useEffect(()=>{
    async function getQuestion(env){
      try{
      await axios.get( `${env.api}/question`)
      setQuestion(res.data.reverse())
     
    }catch(error){
      console.log(error);
      console.log(res.data);
  
    }
  }
  getQuestion(question);
  
  },[])
  return (
    <div>
        <div className='stack-index'>
            <div className='stack-index-content'>
                <Sidebar />
               <Main />
            </div>
        </div>
    </div>
  )
}

export default Index