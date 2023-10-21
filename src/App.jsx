
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  

  return (
    <div className='w-[90%] mx-auto'>
            <Header></Header>
            <div className='min-h-[calc(100vh-90px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
  )
}

export default App
