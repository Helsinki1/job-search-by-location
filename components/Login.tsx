'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Login = () => {

  const [isAuth, setIsAuth] = useState(JSON.parse( localStorage.getItem("isAuth") ?? "false" ));;
  
  return (
    (isAuth)? <Link href="/profile" className="text-xl font-bold text-white">Profile</Link> : <Link href="/login" className="text-xl font-bold text-white">Login</Link>
  );
}

export default Login