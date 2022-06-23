import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import NotFound from './pages/NotFound'

function AppRouter ()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter