import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { post } from '../models/modeltypes'
import { RootState } from '../store'
interface PostBodyProps {
    isAdding: boolean
}
const PostBody = ({ isAdding }: PostBodyProps) => {
    const selectPost = useSelector<RootState, post | null>((state: RootState) => state.postreducer.selectedPost)
    const [post, setPost] = useState<post>({ id: 0, title: "new post", body: "new post body" })
    const titleInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPost({ ...post, title: e.target.value })
    }
    const bodyInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost({ ...post, body: e.target.value })
    }
    const btnClickHandler = () => {
        console.log(post)
    }
    return (

        <>
            {isAdding ? <>
                <div className="card">
                    <div className="card-header">
                        <div className='posttitle-container'><label>Post Title :</label>   <input value={post.title} placeholder='title...' onChange={titleInputHandler}></input></div>
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            <div className='postbody-container'><label >Post Body :</label>  <textarea onChange={bodyInputHandler}></textarea></div>

                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="btn addbtn" onClick={btnClickHandler}>Add Post</button>
                    </div>
                </div>
            </> : <div className="card">
                <h5 className="card-header">{selectPost ? selectPost.title : "Title"}</h5>
                <div className="card-body">
                    <p className="card-text">{selectPost ? selectPost.body : "body"}</p>
                </div>
            </div>}
        </>
    )
}

export default PostBody
