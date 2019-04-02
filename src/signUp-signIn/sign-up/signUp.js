import React from 'react'
import './style.css'

const SignUp = () => (
    <div className = 'sighUpContainer'>
        <h1 className = 'createAccount'>Create Account</h1>
        <form>
            <input 
                className = 'inputStyle'
                type = 'text' 
                name = 'name'
                placeholder = 'Name'
            />

            <input 
                className = 'inputStyle'
                type = 'email' 
                name = 'email' 
                placeholder = 'Email'
            />

            <input 
                className = 'inputStyle'
                type = 'password' 
                name = 'password' 
                placeholder = 'Password'
            />

            <input
                className = 'submitStyle'
                type = 'submit' 
                value = 'SIGN UP'
            />
        </form>
    </div>
)

export default React.memo(SignUp);