import React from 'react'
import '../css/fdiscussion.css';

const ForumD = () => {
  return (
    <>
    <div className='discussioncontained'>
    <div className='FirstLayer'>
        <div className='SecondLayer'>
            <div className='ThirdLayer d-flex justify-content-between align-items-center mb-2'>
                <div>
                <h6 className='username fw-bold text-success mb-1'>Default User</h6>
                <p className='text-muted small mb-0'>TIMESTAMP POSTED HERE</p>
                </div>
                <div className='dropdownbtn dropdown position-absolute top-0 end-0 three-dots'>
                    <a className='link-muted' href='#' role='button' id='dropdownMenuLink'
                        data-bs-toggle='dropdown' aria-expanded='false'>
                        <i className='dropthree bx bx-dots-horizontal-rounded'></i></a>

                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                        <li><a className='dropdown-item' href='#' onclick='editPost()'>Edit</a></li>
                        <li><a className='dropdown-item' href='#' onclick='deletePost()'>Delete</a></li>
                    </ul>
                </div>
            </div>
            <div className='small d-flex justify-content-start'>
                <a href='#!' className='d-flex align-items-center me-3 like-button' onclick='handleLike(this)'>
                    <i className='far fa-thumbs-up me-2'></i>
                    <span className='like-counter'>0</span>
                </a>
                <a href='#!' className='d-flex align-items-center me-3 dislike-button' onclick='handleDislike(this)'>
                    <i className='far fa-thumbs-down me-2'></i>
                    <span className='dislike-counter'>0</span>
                </a>
                <a href='#!' className='d-flex align-items-center me-3 reply-button' onclick='toggleCommentContainer()'>
                    <i className='fas fa-reply me-2'></i>
                    Reply
                </a>
            </div>
        </div>
    </div>

    <div className='returnbtn'>
        <a><i className='returnbut bx bx-arrow-back'></i></a>
    </div>
    </div>
</>
  )
}

export default ForumD


