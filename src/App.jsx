import './App.css'
import { Routes } from './routes'
import Navbar from './component/Navbar/Navbar'
// import Footer from './component/Footer/Footer'

function App() {
  return (
    <div className='header'>
      <Navbar/>
      <Routes/>
      {/* <Footer/>  */}
    </div>
  )
}

export default App
