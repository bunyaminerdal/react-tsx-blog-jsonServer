import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { post } from '../models/modeltypes'
import { AppDispatch, RootState } from '../store'
import { selectPost } from '../store/actions/action-creator'
import ActionType from '../store/actions/action-types'

const PostBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector<RootState, post[] | null>((state) => state.postreducer.posts)

  const postclickHandler = (postId: number) => {
    dispatch({ type: ActionType.POST_ADDING, payload: false })
    dispatch(selectPost(postId))
  }
  const postAddingClickHandler = () => {
    dispatch({ type: ActionType.POST_ADDING, payload: true })
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
        <button className="btn addbtn" onClick={postAddingClickHandler}>New Post</button>
      </div>
    </div>
  )
}

export default PostBar
