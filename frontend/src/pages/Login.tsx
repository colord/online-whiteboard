// import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.scss'

function Login() {
  const navigator = useNavigate()

  function submitLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries())

    const { username, password } = formData

    console.log(username, password)

    navigator('/dashboard')
  }

  return (
    <main id='Login' className='container pt-5' style={{ maxWidth: '30rem' }}>
      <h1 className='pb-4'>Login</h1>
      <form onSubmit={submitLogin}>
        <div className='mb-3'>
          <label htmlFor='Username' className='form-label fw-semibold'>Username</label>
          <input type='username' className='form-control' name='username' required />
        </div>
        <div className='mb-3'>
          <label htmlFor='Password' className='form-label fw-semibold'>Password</label>
          <input type='password' className='form-control' name='password' required />
        </div>
        <button type='submit' className='btn btn-outline-success'>Submit</button>
      </form>
    </main >
  )
}

export default Login