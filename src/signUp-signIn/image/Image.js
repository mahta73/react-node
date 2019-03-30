import React from 'react'
import './style.css'
import ImagePhoto from '../imgs/image.jpg'

const Image = () => (
    <div className = 'imageAndTextContainer'>
        <img 
            className = 'imageStyle'
            src = {ImagePhoto} 
            alt = 'image' 
        />
        <h1 className = 'top-left'> Welcome Back! </h1>
        <p className = 'bottom-left'>To keep connected with us please login with your personal info</p>
        <input className = 'button-on-image' type = 'botton' value = 'SIGN IN'/>
    </div>
)

export default Image;