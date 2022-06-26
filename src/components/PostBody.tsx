import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { post } from '../models/modeltypes'
import { AppDispatch, RootState } from '../store'
import ActionType from '../store/actions/action-types'

import deleteIcon from '../Icons/delete.svg'
import editIcon from '../Icons/edit.svg'
import { addPost } from '../store/actions/action-creator'

const PostBody = () => {
    const dispatch = useDispatch<AppDispatch>()
    const selectPost = useSelector<RootState, post | null>((state: RootState) => state.postreducer.selectedPost)
    const isAdding = useSelector<RootState, boolean | null>((state: RootState) => state.postreducer.postAdding)
    const [post, setPost] = useState<post>({ id: 0, title: "", body: "" })
    const titleInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPost({ ...post, title: e.target.value })
    }
    const bodyInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost({ ...post, body: e.target.value })
    }
    const addbtnClickHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addPost(post))
    }
    const cancelbtnClickHandler = () => {
        dispatch({ type: ActionType.POST_ADDING, payload: false })
    }
    return (

        <>
            {isAdding ? <>
                <div className="card">
                    <form action="POST" onSubmit={addbtnClickHandler}>
                        <div className="card-header">
                            <div className='posttitle-container'><label>Post Title :</label>   <input required value={post.title} placeholder='Enter title...' onChange={titleInputHandler}></input></div>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <div className='postbody-container'><label >Post Body :</label>  <textarea required placeholder='Enter post body...' onChange={bodyInputHandler}></textarea></div>

                            </div>
                        </div>
                        <div className="card-footer footer">
                            <button type='submit' className="btn addbtn">Add Post</button>
                            <button className="btn addbtn" onClick={cancelbtnClickHandler}>Cancel</button>
                        </div>
                    </form>
                </div>
            </> : <div className="card">
                <div className="card-header title-and-btns-container">
                    <h5>{selectPost ? selectPost.title : "Title"}</h5>
                    <div className="img-container">
                        <span onClick={() => console.log(selectPost?.title, "edit")}><img src={editIcon} alt="" /></span>
                        <span onClick={() => console.log(selectPost?.title, "delete")}><img src={deleteIcon} alt="" /></span>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{selectPost ? selectPost.body : "body"}</p>
                </div>
            </div>}
        </>
    )
}

export default PostBody
