import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/navBar'
import Footer from './components/Footer/Footer'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LayOut from './components/LayOut/LayOut';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portifolio from './components/Portifolio/Portifolio';


let x=createBrowserRouter([
  {
    path:'',
    element:<LayOut/>,
    children:[
      {index:true,element:<Home />},
      {path:"About",element:<About/>},
      {path:"Portifolio",element:<Portifolio/>},
      {path:"Contact",element:<Contact/>}
    ]
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
