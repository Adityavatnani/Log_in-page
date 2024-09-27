import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
              <div className="box">
                <div className="form-sign-in">
                <form action="#">
                  <h1>Login</h1>
                  <input type="email" placeholder="Email" required />
                  <button>Login</button>
                  <p> Don't have an account? <a href="#" id="signuUp">Register</a></p> 
                </form>
                </div>
                <div className="form-sign-up">
                  <form action="#">
                    <h1>Register</h1>
                    <input type="text" placeholder='Name' required />
                    <input type="email" placeholder='Email' required />
                    <input type="password" placeholder='Password' required/>
                    <button>Register</button>
                    <p>Already have an account? <a href="#" id='signIn'>Login</a></p>
                  </form>
                </div>
                  <div className="over-container">
                    <div className="over">
                      <div className="over-panel-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className='ghost' id='signInOver'>Login</button>
                      </div>
                      <div className="over-panel-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <button className='ghost' id='signUpOver'>Register
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
    </>
  )
}

export default App
