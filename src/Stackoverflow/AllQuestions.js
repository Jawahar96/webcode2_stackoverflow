// import { Avatar } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/AllQuestions.css'


const AllQuestions = () => {

    const [data,set]=useState([])

    function truncate(str,n){
    return str?.length > n  ? str.substr(0,n-1) + "..."  : str;
    }
    
  return (
    <div>
        <div className='all-questions'>
            <div className='all-question-container'>
                <div className='all-questions-left'>
                    <div className='all-options'>
                    <div className='all-options'>
                        <p>0</p>
                        <span>Votes</span>
                    </div>

                    <div className='all-options'>
                        <p>0</p>
                        <span>{data ?. answerDetails?.length}</span>
                        </div>

                        <div className='all-options'>
                        <small>0 views</small>
                        </div>
                    </div>
                </div>
                <div className='question-answer'>
                   <Link>Question titile</Link>
                        <Link to={`/question/?q=${data?._id}`}>What s meant by Javascript {data.title} </Link>
                        <div style={{
                           width :"90%"

                        }}></div>
                    </div> 
                    <div>Javascript is a scripting language for web developent.It is used for to make the web pages can be interactive.I t can be uses for client side and server side</div>
                </div>
            </div>
            <div style={{
                display :"flex",
                
            }}>
                <span className='question-tags'>react
                </span>
                <span className='question-tags'>antd
                </span>
                <span className='question-tags'>frontend
                </span>
               
                <div className='author'>
                    <small>Timestamp</small>
                    <div className='author-details'>
                       
                        <p>{data.user?.display ? data ?.user.display : ""}</p>
                    </div>
                </div>

                     
                
            </div>
        </div>

  )
}

export default AllQuestions