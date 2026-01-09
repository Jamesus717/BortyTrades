'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) alert(error.message)
        else alert('Logged in!')
    }

    return (
        <div>
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Log In</button>
        </div>
    )
}
