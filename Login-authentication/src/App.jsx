import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="container">
        <div class="box">
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Login</h1>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button>Login</button>
                    <p>Don't have an account? <a href="#" id="signUp">Register</a></p>
                </form>
            </div>
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Register</h1>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button>Register</button>
                    <p>Already have an account? <a href="#" id="signIn">Login</a></p>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signInOverlay">Login</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <button class="ghost" id="signUpOverlay">Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default App
