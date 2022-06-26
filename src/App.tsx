import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PostBar from "./components/PostBar";
import PostBody from "./components/PostBody";
import { AppDispatch } from "./store";
import { getPosts } from "./store/actions/action-creator";
import './App.css'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const [isAdding, SetIsAdding] = useState(false)
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  const addPostClickHandler = () => {
    SetIsAdding(!isAdding)
  }
  return (

    <div className="App" >
      <div className="postbar">
        <PostBar clickHandler={addPostClickHandler} />
      </div>
      <div className="postbody" >
        <PostBody isAdding={isAdding} />
      </div>
    </div>
  );
}

export default App;