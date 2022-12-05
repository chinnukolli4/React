/*import ClassComponent from './ClassComponent'
import PropsExample from './PropsExample'
import FuncProps from './FunceProps'
import StateExample from './StateExample'
import Demo from './Demo'
import Events from './Events'
import JSX from './JSX'*/
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'

function App(){
  return(
    <section>
    <BrowserRouter>
    <Navbar/>
    <NotFound/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
       </Routes>
       </BrowserRouter>
    </section>

    )
}
export default App;

