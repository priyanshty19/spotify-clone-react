import React from 'react'
import useAuth from '../auth/useAuth'

export default function Dashboard({code}) {
    const accessToken=useAuth(code)
    return (
        <div>
         {code}   
        </div>
    )
}
