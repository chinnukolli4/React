import {Link} from 'react-router-dom'
import '../App.css'

function Navbar(){
	return(
		<div class="nav">
		<Link class="home" to="/">Home</Link>
		<Link class="contact" to="/contact">contact</Link>
		<Link calss="about"to="/about">About</Link> 
		</div>
		)
}
export default Navbar