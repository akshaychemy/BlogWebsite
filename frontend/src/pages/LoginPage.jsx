import React, { useState } from 'react'

import api from '../services/api'

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)

        try {

            const data = await api.login({ email, password });
            localStorage.setItem('token', data.token);
            console.log(data)

        } catch (err) {
            console.log(err.message)
        }

    }

    return (
        <div className='main'>
            <form onSubmit={handleSubmit} className='formStyle'>
                <div className='sections '>
                    <label htmlFor="">email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='emailStyle' />
                </div>

                <div className='sections '>
                    <label htmlFor="">Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='sections passwordSection'>
                    <button type="submit">Login</button>
                </div>

            </form>
        </div>
    )
}
