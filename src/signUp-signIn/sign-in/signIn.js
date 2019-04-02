import React from 'react'

let pStyle = {
    color: '#454547',
    textAlign: 'center'
}

const SingIn = () => {
    return (
        <div className = 'sighUpContainer'>
            <h1 className = 'createAccount'> Sign up to LearnJS </h1>
            <form>
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

                <p style = {pStyle}> Forgot your password? </p>

                <input
                    className = 'submitStyle'
                    type = 'submit' 
                    value = 'SIGN IN'
                />
            </form>
        </div>
    )
}

export default React.memo(SingIn);