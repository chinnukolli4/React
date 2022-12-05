import {Component} from 'react'

class Events extends Component{
    state={
        username:"",
        password:""
    }
    handleClick=()=>{
        console.log(this.state.username)
        console.log(this.state.password)
    }
    handelChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div>
            <input 
            name="username"
             onChange={this.handelChange}
            placeholder="enter username"/>
            <p><input 
            name="password"
            onChange={this.handelChange}
            placeholder="enter password"/></p>
            <button onClick={this.handleClick}>submit</button>
            </div>
            )

    }
}export  default Events