import React, { useEffect, useState } from 'react'


import api from  '../services/api'

export default function HomePage() {

    const [posts,getPosts]= useState([])


    useEffect(()=>{
        const fetchPosts = async ()=>{
            const data = await api.getPosts()
            console.log(data)
            getPosts(data)
        }

        fetchPosts()
    },[])

  return (
    <div>
        <center> <h1>Blog Website</h1></center>
     

      <ul className='blogpost'>
        {posts.map(post=>(
          <li key={post._id} className='blogPostStyle'>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small> by : {post.author.username}</small>
            <br />
            <small> email : {post.author.email}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
