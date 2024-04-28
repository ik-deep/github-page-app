import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const LandingPage = () => {
  const [username,setUsername] = useState('');
    // const [userNotExist, setUserNotExist] = setUser(false);

  // const handleOnSubmit=(event)=>{
  //   event.preventDefault(); 
  //   // console.log(username);

  // }


  return (
    <div className="container">
       <h1>Welcome to GitHub Landing Page</h1>
       <div className='formDiv'>
       <div className='form-input'>
       <p style={{'line-height': "25px"}}>GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside millions of other developers.</p>
      <img src={`https://qph.cf2.quoracdn.net/main-qimg-729a22aba98d1235fdce4883accaf81e`}alt="GitHub Logo" className="github-logo"/>
        </div> 
       <div className='man-images'>
            <img src={`https://user-images.githubusercontent.com/74038190/219923809-b86dc415-a0c2-4a38-bc88-ad6cf06395a8.gif`} alt='' className="github-logo"/>
        </div>
     </div>
    <div className="github-info">
      <div className='input-form'>
      <label htmlFor='username'>Enter your GitHub username to get started:</label>
            <form  >
               <input type="text" placeholder="Enter your GitHub username"   value={username}
                onChange={(e) => setUsername(e.target.value)} id='username' required/>
              <Link to={`/profile/${username}`}> <input type="submit" style={{marginLeft:"10px"}} value="Submit"/></Link>
            </form>
      </div>
   
      </div>

    <div className="quote">
      <p>"Collaboration is at the heart of every successful project." - Anonymous</p>
    </div>
    </div>
  )
}

export default LandingPage
