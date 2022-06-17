import React from 'react'
import { useState } from 'react';

export const CommentForm = ({ElonImage, AddComment}) => {
    const[input, setInput] = useState('');

    const formSubmit = e =>{
        if(input.length > 0){
            AddComment(input);
            setInput('');
        }
    }

    const formChange = e =>{
        setInput(e.target.value);
    }
  return (
        <div className="comment-form-section">
            <div className="commentform">
                <img src={ElonImage} alt="" className="commentform-avatar" />
                <input type="text" onChange={formChange} value={input} className="commentform-input" placeholder='Add a comment...'/>  
                <button className='commentform-button' onClick={(e)=>{
                    e.preventDefault();
                    formSubmit();
                }}>SEND</button>
            </div>
        </div>
  )
}