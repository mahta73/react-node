import React, {useState} from 'react'

import SignUp from './sign-up/signUp'
import SingIn from './sign-in/signIn'
import Image from './image/Image'

import './style.css'

const SignInUp = () => {
    const [sign, setSign] = useState('SIGN IN');

    return (
        <div className = 'container'>
            <Image 
                handleClick = {() => 
                    (sign === 'SIGN IN' ?  setSign('SIGN UP') :  setSign('SIGN IN'))
                }
                bottonValue = {sign}
            />
            {
                (sign === 'SIGN IN' ?  <SignUp /> : <SingIn />)
            }
            
        </div>
    )
}

export default SignInUp;