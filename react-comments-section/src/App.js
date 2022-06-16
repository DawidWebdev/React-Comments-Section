import { useState } from 'react';
import './App.css';
import { Comment } from './Components/Comment';
import { CommentForm } from './Components/CommentForm';
//Avatars
import ElonImage from './images/avatars/elonAvatar.png'
import GatesImage from './images/avatars/gatesAvatar.png'
import ZuckerbergImage from './images/avatars/zuckerbergAvatar.png'
import IwinskiImage from './images/avatars/iwinskiAvatar.png'

const App = () => {
  const[comments, setComments] = useState([]);

  const AddComment = (text) =>{
    let id = 1;
    if(comments.length > 0)
    {
      id = comments[comments.length - 1].id + 1;
    }
    let comment ={
      id: id,
      text: text,
      ownComment: true
    }
    let newComments = [...comments, comment];
    setComments(newComments);
  }

  const DeleteComment = (commentage) =>{
    let newComments = comments.filter((comment) => comment.id !== commentage.id)
    setComments(newComments);
  }

  const EditComment = (commentage) =>{
    
  }

  return (
    <main>
      <section>
        <ul>
          <Comment commentimage={GatesImage} commenttext="Wow! This app is better than Twitter!" commentdate="1 week ago" elonImage={ElonImage} ownComment={false}/>
          <Comment commentimage={ZuckerbergImage} commenttext="In my opinion, this application is a new facebook, change my mind!!!" commentdate="2 days ago" elonImage={ElonImage} ownComment={false}/>
          {comments.map((comment) =>{
            return(
              <Comment commentage={comment} commenttext={comment.text} key={comment.id} commentimage={ElonImage} elonImage={ElonImage} ownComment={comment.ownComment} DeleteComment={DeleteComment}/>
            )
          })}
        </ul>
      </section>
      <section>
        <CommentForm ElonImage={ElonImage} AddComment={AddComment}/>
      </section>
    </main>
  );
}

export default App;
