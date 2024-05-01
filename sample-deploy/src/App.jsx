

import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (

    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<p>Index page</p>} />
          <Route path='/login' element={<p>login page</p>} />
          <Route path='/register' element={<p>registers page</p>} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
