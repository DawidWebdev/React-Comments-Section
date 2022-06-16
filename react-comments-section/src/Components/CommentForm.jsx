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
    <form className="commentform" onSubmit={null}>
        <img src={ElonImage} alt="" className="commentform-avatar" />
        <input type="textarea" onChange={formChange} value={input}/>
        <button onClick={(e)=>{
            e.preventDefault();
            formSubmit();
        }}>SEND</button>
    </form>
  )
}