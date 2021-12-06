import './App.css';
import { useState } from 'react'; 
import Card from './card'
import Form from './form'

function App() {
  const [query, setQuery] = useState("")
  const [posts, setPosts] = useState([])
  const updateQuery = event => setQuery(event.target.value)

  const getPosts = async () => {
    const url = "https://worker.yujiaxie20234977.workers.dev/posts"
    //const url = 'http://127.0.0.1:8787/posts'
    const res = await fetch(url, {
      method: "GET", 
      headers: {
        'Content-type': 'application/json',
      }
    })
    return res.json()
  }

  const search = async () => {
    const posts = await getPosts()
    setPosts(posts)
  }
  return (
    <div className="App">
      <div className='posts'>
      <button onClick={search}>Get All Posts</button>
        {posts.map((post, i) => {
          return (<Card post={post} key={i}/>)
        })}
      </div>
      <div className='form'>
        <Form />
      </div>
    </div>
  );
}

export default App;
