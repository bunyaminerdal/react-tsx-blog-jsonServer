import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { post } from '../models/modeltypes'
import { AppDispatch, RootState } from '../store'
import { selectPost } from '../store/actions/action-creator'
interface PostBarProps {
  clickHandler: () => void;
}
const PostBar = ({ clickHandler }: PostBarProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector<RootState, post[] | null>((state: RootState) => state.postreducer.posts)

  const postclickHandler = (postId: number) => {
    dispatch(selectPost(postId))
  }
  return (
    <div className="card" >
      <div className="card-header">
        Posts
      </div>
      <ul className="list-group list-group-flush">
        {posts?.map((post) => {
          return <li key={post.id} className="list-group-item listbtn" onClick={() => postclickHandler(post.id)}>{post.title}</li>
        })}
      </ul>
      <div className="card-footer">
        <button className="btn addbtn" onClick={clickHandler}>Add Post</button>
      </div>
    </div>
  )
}

export default PostBar
