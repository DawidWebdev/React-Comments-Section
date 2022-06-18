import React from 'react'
import { useState } from 'react'
import elonImage from '../images/avatars/elonAvatar.png'

export const Comment = ({commentage ,commentimage , commenttext, commentdate, ownComment, DeleteComment, commentusername}) => {
  const[replyActive, setReplyActive] = useState(false);
  const[input, setInput] = useState('');
  const[comofcom, setcoc] = useState([]);
  const[editView, setEditView] = useState(false);
  const[editInput, setEditInput] = useState(commenttext);

  const changeReply = () =>{
    if(replyActive){setReplyActive(false)}
    else{setReplyActive(true)}
  }

  const changeEdit = () =>{
    if(editView){setEditView(false)}
    else{setEditView(true)}
  }

  const changeInput = e =>{
    setInput(e.target.value)
  }

  const AddCommentOfComment = (text) =>{
    let id = 1;
    if(comofcom.length > 0)
    {
      id = comofcom[comofcom.length - 1].id + 1;
    }
    let commentofcomment ={
      id: id,
      text: text,
      ownComment: true
    }
    let newComments = [...comofcom, commentofcomment];
    setcoc(newComments);
  }

  const DeleteCommentOfComment = (coc) =>{
    let newComments = comofcom.filter((comment) => comment.id !== coc.id)
    setcoc(newComments);
    console.log(comofcom);
  }

  const replySubmit = () =>{
    if(input.length > 0){
      AddCommentOfComment(input);
      setInput('');
    }
  }

  const replyInputChange = e =>{
    setEditInput(e.target.value);
  }

  const replyButtonSubmit = () =>{
    setEditInput(editInput);
    setEditView(false);
  } 

  const renderEditMode = () =>{
    return(
      <div className="edit-comment-section">
        <div className="edit-comment">
          <div className="commentimage"><img src={elonImage} alt="" /></div>
          <textarea onChange={replyInputChange} value={editInput} className='reply-comment-input'></textarea>
          <div className="edit-comment-buttons">
            <div className="edit-buttons-up"><button onClick={()=>{replyButtonSubmit();}} className='reply-comment-button'>UPDATE</button></div>
            <div className="edit-buttons-down">
            <button onClick={()=>{DeleteComment(commentage);}} className="delete-button"><svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/>
                </svg>Delete</button>
                <button onClick={()=>{changeEdit();}} className="edit-button"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/>
                </svg>Edit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderDefaultMode = () =>{
    return (
      <section className='comment-section'>
        <div className='comment'>
          <div className="comment-top">
            <div className="commentimage"><img src={commentimage} alt="" /></div>
            <div className="commentusername mg-left-75">{commentusername}</div>
            {ownComment && <div className="comment-you mg-left-75">you</div>}
            <div className="commentdate mg-left-75">{commentdate}</div>
          </div>
          <div className="commenttext">{editInput}</div>
          <div className="commentbuttons">
              {!ownComment && <button onClick={()=>{changeReply();}} className="reply-button">
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/>
                </svg>Reply</button>}
              {ownComment && <button onClick={()=>{DeleteComment(commentage);}} className="delete-button"><svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/>
                </svg>Delete</button>}
              {ownComment && <button onClick={()=>{changeEdit();}} className="edit-button"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/>
                </svg>Edit</button>}
            </div>
        </div>

        <div className="com-of-com">
          <ul className="comments-of-comments">
            {comofcom.map((comment) =>{
              return(
                <Comment commentage={comment} commenttext={comment.text} key={comment.id} ownComment={comment.ownComment} DeleteComment={DeleteCommentOfComment} commentimage={elonImage} commentusername='Elon Musk'/>
              )
            })}
          </ul>
        </div>
  
        {replyActive && 
          <div className="reply-comment-section">
            <div className='reply-comment'>
              <div className="reply-comment-image"><img src={elonImage} alt="" /></div>
              <textarea className="reply-comment-input" placeholder='Add a reply...' onChange={changeInput} value={input}></textarea>
              <button onClick={e=>{e.preventDefault(); replySubmit(); setReplyActive(false)}} className="reply-comment-button">REPLY</button>
            </div>
          </div>
        }
      </section>
    )
  }

  return (editView ? renderEditMode() : renderDefaultMode())
}