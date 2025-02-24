import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserSidebar from './components/layouts/UserSidebar'
//import './App.css'
import './assets/adminlte.css'
import './assets/adminlte.min.css'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './components/user/UserProfile'
import Login from './components/common/Login'
import SignUp from './components/common/SignUp'
import Form from './components/admin/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body className='layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded'>
      <div className='app-wrapper'>
      {/* <UserSidebar></UserSidebar> */}
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/user' element={<UserSidebar></UserSidebar>}>
          <Route path='profile' element={<UserProfile></UserProfile>}></Route>
          <Route path='form' element={<Form></Form>}></Route>
        </Route> 
      </Routes>
      </div>
    </body>
  )
}

export default App
