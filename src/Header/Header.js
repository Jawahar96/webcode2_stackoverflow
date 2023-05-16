
import React, { useState } from 'react'
import './css/Header.css'
import InboxIcon from '@mui/icons-material/Inbox';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Input } from '@mui/material';

const Header = () => {
  const user = useState({})


  function stringtocolor(string) {
    let hash = 0
    let i, j;
    for (let j = 0; j < string.length; j++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }
    stringtocolor();
  }
  // let hash
  // let color= "#"
  // for(let i=0;i<3;i++){
  //   const value=(hash >> (i*8)) & 0xff
  //   color=color+`00{value.toString(16)}`.substring(2)


  //   return color;
  

 

  return (
    <div>
      <div className='header-container'>
        <div className='header-left'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png' alt='logo' />
          <h3>Products</h3>
        </div>
      </div>
      <div className='header-middle'>
        <div className='header-search-container'>
          <SearchIcon />
          <input type='text' placeholder='Search' />

        </div>
        <div className='header-right'>
          <div className='header-right-container'>
            <Avatar style={{cursor : "pointer"}} />
            <InboxIcon />
            <svg
              aria-hidden="true"
              class="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox='0 0 18 18'
              fill='rgba(0,0,0,0.5)'
              style={{
                cursor: "pointer",

              }}>
              <path d='M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z'></path>
            </svg>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Header