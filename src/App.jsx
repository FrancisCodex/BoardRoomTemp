import './App.css'
import Login from './components/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Signup from './components/signup'
import Profile from './components/protected/profile'
import ProtectedPage from './components/authentication/ProtectedPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/auth/login' element={<Login/>}/>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/user/profile' element={<ProtectedPage> <Profile /> </ProtectedPage>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
