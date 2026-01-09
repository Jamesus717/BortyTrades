'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function SignupPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSignup() {
        const { data, error } = await supabase.auth.signUp({ email, password })
        if (error) alert(error.message)
        else alert('Check your email for verification link')
    }

    return (
        <div>
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    )
}