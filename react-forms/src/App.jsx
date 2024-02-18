import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [state,setState]=useState(
    {
      firstName:"",
      lastName:"",
      email:"",
      number:"",
    }
  )


  const [validate,setValidate]=useState(false)
  const [submit,setSubmit]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(state.firstName&&state.lastName&&state.email&&state.number){
      setValidate(true)
    }
      setSubmit(true)
  }

  return (
    <>
     <form className='form' onSubmit={(e)=>{handleSubmit(e)}}>
    {submit && validate? <div className="success-message">Registration successful</div>:null}

        <label><input type='text' id='firstname' placeholder='Enter First Name' onChange={(e)=>{setState({...state,firstName:e.target.value})}} value={state.firstName}/></label>
        
        {submit&&!state.firstName?<span>Please Enter your first-Name</span>:null}

        <label><input type='text' id='lastname' placeholder='Enter Last Name' onChange={(e)=>{setState({...state,lastName:e.target.value})}} value={state.lastName}/></label>
        {submit&&!state.lastName?<span>Please Enter your last-Name</span>:null}

        <label><input type='email' id='email' placeholder='Enter Email' onChange={(e)=>{setState({...state,email: e.target.value})}} value={state.email}/></label>
        {submit&&!state.email?<span>Please Enter your Email</span>:null}

        <label><input type='number' id='contacts' placeholder='Enter Contact' onChange={(e)=>{setState({...state, number: e.target.value})}} value={state.number}/></label>
        {submit&&!state.number?<span>Please Enter your number</span>:null}

        <label><button type='submit'>Submit</button></label>
       
      </form>
    </>
  ) 
  }
export default App
