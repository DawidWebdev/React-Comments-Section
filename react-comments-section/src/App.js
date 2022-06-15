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

  }

  return (
    <div className="App">
      <CommentForm ElonImage={ElonImage} />
    </div>
  );
}

export default App;
