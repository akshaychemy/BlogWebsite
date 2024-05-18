import React, { useState } from 'react'

import api from '../services/api'

export default function RegisterPage() {

    const [username,setUsername]=useState('username12')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            const data = await api.regiter({username,email,password});
            console.log(data)

        }catch(err){
            console.log(err.message);
        }
        // const res = await fetch('http://localhost:5000/api/auth/register',{
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({
        //         username,
        //         email,
        //         password
        //     })
        // })
        // const data = await res.json();
        // console.log(data);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Username:</label>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>

        <div>
            <label htmlFor="">email:</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div>
            <label htmlFor="">Password:</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
