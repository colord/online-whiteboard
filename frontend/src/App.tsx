import { Route, Routes, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Whiteboard from './pages/Whiteboard'
import './styles/App.scss'

function Blank() {
  return <h1>hi</h1>
}

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='/dashboard' element={user ? <Blank /> : <Navigate to='/' />} /> */}
        <Route path='/wb/:id' element={<Whiteboard />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
