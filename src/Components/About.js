import {useState} from 'react'

function About(){
	const [village,SetVillage]=useState("america");
	const [country,setCountry]=useState("India")
	return(
		<div>
		 	{/*<h1>{country}</h1>
		 	<p>{village}</p>*/}
		 	<p><input
		 	onChange={(e)=>setCountry(e.target.value)}/></p>
			<button onClick={()=>console.log(country)}>submit</button>
		</div>
		)
}
export default About