import { useState } from 'react';
import { useEffect } from 'react';
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
      ownComment: true,
      username: "Elon Musk"
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
          <Comment commentimage={GatesImage} commenttext="Wow! this website is better than twitter! You can see that the programmer who made it is a good front-end developer, it looks great! Dawid Poniewierski == Mark Zuckerberg." commentdate="1 week ago" elonImage={ElonImage} ownComment={false} commentusername="Bill Gates"/>
          <Comment commentimage={ZuckerbergImage} commenttext="In my opinion, this website is a new facebook, change my mind!!! Can I buy it for the META applications?" commentdate="5 days ago" elonImage={ElonImage} ownComment={false} commentusername="Mark Zuckerberg"/>
          <Comment commentimage={IwinskiImage} commenttext="Buy Cyberpunk 2077! (nice website)" commentdate="2 days ago" elonImage={ElonImage} ownComment={false} commentusername="Marcin Iwiński"/>
          {comments.map((comment) =>{
            return(
              <Comment commentage={comment} commenttext={comment.text} key={comment.id} commentimage={ElonImage} elonImage={ElonImage} ownComment={comment.ownComment} DeleteComment={DeleteComment} commentusername={comment.username}/>
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
