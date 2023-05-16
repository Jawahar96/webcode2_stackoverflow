import React from 'react'
import {Public,Stars,Work} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
        <div className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-options'>
                    <div className='sidebar-options'>
                        <Link>Home</Link>
                    </div>
                    <div className='sidebar-options'>
                        <Link>PUBLIC</Link>
                        <div className='link'>
                            <div className='link-tag'>
                                <Public />
                                <Link>Question</Link>
                            </div>

                           

                            <div className='Tags'>
                                <p>Tags</p>
                                <p>Users</p>

                                <div className='sidebar-options'>
                          <p>COLLECTIVES</p>
                           
                           <div className='link'>
                            <div className='link-tag'>
                               
                                <Stars />
                                <Link>Explore Collectives</Link>
                            </div>
                            </div>
                            <div className='sidebar-options'>
                                <p>FIND A JOB</p>
                               
                                <div className='link'>
                                    <div className='link-tag'>
                                        <a>Question</a>
                                    </div>
                                </div>

                            </div>
                            <div className='sidebar-options'>
                                <p>TEAMS</p>
                                <div className='link-tag'>
                                    <Work />
                                    <Link>Company</Link>
                                </div>
                            </div>
                        </div>
                </div>
               
                        </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Sidebar