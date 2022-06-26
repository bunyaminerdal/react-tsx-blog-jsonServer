import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostBar from "./components/PostBar";
import PostBody from "./components/PostBody";
import { AppDispatch } from "./store";
import { getPosts } from "./store/actions/action-creator";
import './App.css'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])


  return (

    <div className="App" >
      <div className="postbar">
        <PostBar />
      </div>
      <div className="postbody" >
        <PostBody />
      </div>
    </div>
  );
}

export default App;