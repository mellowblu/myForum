import React from 'react'
import '../css/ffront.css';

const ForumF = () => {
  return (
    <>
    <div className='forumfront'>
        <div className='dashcard'>
            <div className='overlap'>
            <input className='searchbee' type='text' id='searchMe' placeholder='Search discussion'/>
            <button type='button' className='buttonSearch btn btn-success'>S</button>
            </div>
            <div className='second'>
                <h1 className='ForumTitle'>FORUM</h1>
                <button type='button' className='buttonadd btn btn-success'>Add discussion</button>
                <button type='button' className='buttonnew btn btn-success'>New Posts</button>
            </div>
        </div>
   

        <div className='LANDING'>
            <img className='tsukiden-logo' alt='Tsukiden logo' src='tsukiden-logo.png' />
            <h6 className='forumdashboard'>Dashboard</h6>
            <h6 className='forumprofile'>Profile</h6>
            <h6 className='forumcourses'>My courses</h6>
            <h6 className='forum'>Forum</h6>
            <div className='toprightbutton'>
            <button type='button' className='buttonout btn btn-outline-success'>Logout</button>
            </div>
        </div>
      
        <div className='cardcontainer'>
            <div className='card-inner'>
            <h5><a href='#' className='discussionTitle'></a>Discussion Title</h5>
            <p className='text-sm'><span className='innerleft'>Posted by</span> <a className='text-black' href='#'>Your Name</a></p>
            </div>   
                <div className='aligncenter'>
                    <div className='rowcenter'>
                        <div className='columnright'> 
                        <a className='ion-ios-chatboxes-outline icon-1x' href='#'></a> 
                        <span className='d-block text-sm'>0 replies</span> 
                        </div>
                    </div>
                </div>
            
            </div>
      
    

        <div className='bottombutton'>
            <button type='button' className='buttontop btn btn-success' href='#'>Back to top</button>
        </div>
    <div/>
      </div>
    </>
  )
}

export default ForumF




