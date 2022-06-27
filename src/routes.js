import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Tasks from './pages/Tasks'
import Header from './components/Header'

function AppRouter ()
{
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
      </Routes> 
    </BrowserRouter>
  )
}
export default AppRouter