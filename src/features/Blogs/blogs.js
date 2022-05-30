import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { blogsSelector, fetchData, reset } from './blogSlice'
import { Link } from "react-router-dom";

const Blog = () => {
    const { data, isLoading, isError, errorMessage } = useSelector(blogsSelector)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(reset())
        dispatch(fetchData())
    }
  return (
    <div className='App-header1'>
        <h1>Blog</h1>
        <button onClick={handleClick} >
            {isLoading ? 'Loading...' : 'Load Blogs'}
        </button>
        <button onClick={() => 
          dispatch(reset())}>Reset</button>
        {isError && <div>{errorMessage}</div>}

       <div className="App-header">
        {[...data].map((info) => (
            <article key={info.id} className="App-id">
              <Link to={`/article/${info.id}`}>
                <h4>{info.title}</h4>
                <p>{info.body}</p>
              </Link>
            </article>
          ))}
        </div>
        
        
    </div>
  )
}

export default Blog

