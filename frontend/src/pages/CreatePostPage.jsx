import React, { useState } from 'react'

import api from '../services/api'

export default function CreatePostPage() {

    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const token = localStorage.getItem('token')

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            const data = await api.createPost({title,content},token);
            console.log(data)

        }catch(err){
            console.log(err.message);
        }
        
    }
  return (
    <div className='main'>
      <form onSubmit={handleSubmit} className='formStyle'>
        <div  className='sections '>
            <label htmlFor="">title:</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='createpostName'/>
        </div>

        <div className='sections '>
            <label htmlFor="">content:</label>
            <textarea  value={content} onChange={(e)=>setContent(e.target.value)}/>
        </div>

        <div className='sections passwordSection'><button type="submit">create post</button></div>
        
      </form>
    </div>
  )
}
