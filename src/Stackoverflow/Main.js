import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AllQuestions from './AllQuestions'
import './css/Main.css'
import { FilterList } from '@mui/icons-material'

function Main() {
    const [questions,setQuestion]=useState({})
    const [data,setData]= useState([])

useEffect(()=>{
   let users = window.location.reload(false)
  console.log(users);
  setData(data)
},[])





  return (
    <div>
        <div className='main'>
            <div className='main-container'>
             <div className='main-top'>
                <h2>All Questions</h2>

                <Link to='/add-question'>
                    <button>Ask Question</button>
                </Link>
             </div>
             <div className='main-desc'>
                <p>{questions.length} questions={data}</p>
                 
                 <div className='main-filter'>
                    <div className='main-tabs'>
                    <Link>Newest</Link>

                    </div>
                    <div className='main-tabs'>
                    <Link>More</Link>

                </div>
                <div className='main-tabs'>
                    <Link>Active</Link>

             </div>
             <div className='main-filter-items'>
             <FilterList />
            
                   

            </div>
        </div>
        <div className='questions'>
            <div className='question'>
            <AllQuestions  question={data}  />
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />

            </div></div>
            </div></div>
        </div>
    </div>
  )
}

export default Main