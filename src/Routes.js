import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Profileinfo from "./Profileinfo"

const Routes = () => {
  return (
    <BrowserRouter>
    <>
    <Routes>
        <Route path='/profile' element={<Profileinfo/>}></Route>
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default Routes