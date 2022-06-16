import React from 'react'
import { useState } from 'react'

export const Comment = ({commentage ,commentimage , commenttext, commentdate, ownComment, elonImage, DeleteComment}) => {
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
      <div className="edit-comment">
        <div className="commentimage"><img src={commentimage} alt="" /></div>
          <div className="commentdate">{commentdate}</div>
          <div className="commentbuttons">
            {ownComment && <button onClick={()=>{DeleteComment(commentage);}}>Delete</button>}
            {ownComment && <button onClick={()=>{changeEdit();}}>Edit</button>}
          </div>
          <div className="edit-input"><input type="textarea" onChange={replyInputChange} value={editInput}/></div>
          <div className="update-button"><button onClick={()=>{replyButtonSubmit();}}>UPDATE</button></div>
      </div>
    )
  }

  const renderDefaultMode = () =>{
    return (
      <section>
        <div className='comment'>
          <div className="commentimage"><img src={commentimage} alt="" /></div>
          <div className="commentdate">{commentdate}</div>
          <div className="commentbuttons">
            {!ownComment && <button onClick={()=>{changeReply();}}>Reply</button>}
            {ownComment && <button onClick={()=>{DeleteComment(commentage);}}>Delete</button>}
            {ownComment && <button onClick={()=>{changeEdit();}}>Edit</button>}
          </div>
          <div className="commenttext">{editInput}</div>
          <ul className="comments-of-comments">
            {comofcom.map((comment) =>{
              return(
                <Comment commentage={comment} commenttext={comment.text} key={comment.id} ownComment={comment.ownComment} DeleteComment={DeleteCommentOfComment}/>
              )
            })}
          </ul>
        </div>
  
        <div className={`reply-comment${replyActive ? " reply-active" : ""}`}>
          <div className="reply-comment-image"><img src={elonImage} alt="" /></div>
          <div className="reply-comment-input"><input type="textarea" value={input} onChange={changeInput}/></div>
          <div className="reply-comment-button">
            <button onClick={e=>{e.preventDefault(); replySubmit(); setReplyActive(false)}}>REPLY</button>
          </div>
        </div>
      </section>
    )
  }

  return (editView ? renderEditMode() : renderDefaultMode())
}