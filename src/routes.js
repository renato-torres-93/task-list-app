import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Tasks from './pages/Tasks'

function AppRouter ()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
      </Routes> 
    </BrowserRouter>
  )
}
export default AppRouter