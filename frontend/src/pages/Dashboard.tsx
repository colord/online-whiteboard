// import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Dashboard.scss'

function Dashboard() {
  const navigator = useNavigate()

  function submitRoomDetails(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries())

    const { roomName, password } = formData

    console.log(roomName, password)

    navigator(`/wb/${roomName || '(username)'}--${password}`)
  }

  return (
    <main id='Dashboard' className='container pt-5' style={{ maxWidth: '30rem' }}>
      <h1 className='pb-4'>Host a Whiteboard™</h1>
      <form onSubmit={submitRoomDetails}>
        <div className='mb-3'>
          <label htmlFor='Username' className='form-label fw-semibold'>Room Name</label>
          <input type='text' className='form-control' name='roomName' placeholder='Room name (your username by default)' />
        </div>
        <div className='mb-3'>
          <label htmlFor='Password' className='form-label fw-semibold'>Password</label>
          <input type='text' className='form-control' name='password' placeholder='Room password (not required)' />
        </div>
        <button type='submit' className='btn btn-outline-success'>Host</button>
      </form>
    </main >
  )
}

export default Dashboard