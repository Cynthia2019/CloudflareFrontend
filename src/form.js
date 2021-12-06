import './form.css'
import { useState } from 'react'
function Form() {
    const submit = async (e) => {
        e.preventDefault()
        //const url = "https://worker.yujiaxie20234977.workers.dev/posts"
        const url = 'http://127.0.0.1:8787/posts'
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value; 
        const content = document.getElementById('content').value;
        console.log("content", content)
        const data = {
            "title": title, 
            "author": author, 
            "content": content,
        }
        const res = await fetch(url, {
            method: "POST", 
            headers: {
              'Content-type': "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(data)
          })
    }
    return(
        <div className='form-container'>
            <h3>Or Write Your Own Post! </h3>
            <form>
                <label htmlFor='title'>Title: </label> 
                <input name='title' id='title'/>
                <label htmlFor='author'>Author: </label> 
                <input name='author' id='author'/>
                <label htmlFor='content'>Write your content: </label>
                <textarea rows='5' cols='50' name='content' id='content'/>
                <input type="submit" value="Submit" id='submit-btn' onClick={submit}></input>
            </form>
        </div>
    )
}
export default Form; 