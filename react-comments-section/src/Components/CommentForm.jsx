import React from 'react'

export const CommentForm = ({ElonImage}) => {
  return (
    <form className="commentform">
        <img src={ElonImage} alt="" className="commentform-avatar" />
        
    </form>
  )
}