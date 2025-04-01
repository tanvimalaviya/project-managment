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
import DemoForm from './components/admin/DemoForm'
import axios from 'axios'
import AddProject from './components/project/AddProject'
import AddTask from './components/project/AddTask'
import { ChartDemo1 } from './charts/ChartDemo1'


function App() {
  axios.defaults.baseURL = "http://localhost:3000"
  return (
    <body className='layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded'>
      <div className='app-wrapper'>
      {/* <UserSidebar></UserSidebar> */}
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/navbar' element={<UserSidebar></UserSidebar>}>
        {/* <Route path='addproject' element={<AddProject></AddProject>}></Route> */}
          <Route path='profile' element={<UserProfile></UserProfile>}></Route>
          <Route path='form' element={<Form></Form>}></Route>
          <Route path='demoform' element={<DemoForm></DemoForm>}></Route>
        </Route> 
         <Route path='addproject' element={<AddProject></AddProject>}></Route>
         <Route path='addtask' element={<AddTask></AddTask>}></Route>
         <Route path='/chartdemo' element={<ChartDemo1></ChartDemo1>}></Route>
        
      </Routes>
      </div>
    </body>
  )
}


export default App
