import React, { useEffect, useState } from 'react'
import '../Stackoverflow/css/index.css'
import Sidebar from '../Stackoverflow/Sidebar'
import './css/Sidebar.css'
import MainQuestion from '../ViewQuestion/MainQuestion'

function index() {

  



  return (
    <div>
        <div className='stack-index'>
            <div className='stack-index-content'>
                <Sidebar />
               
                <MainQuestion  val ={question}  />
            </div>
        </div>
    </div>
  )
}

export default index