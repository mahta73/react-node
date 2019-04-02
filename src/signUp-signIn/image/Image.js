import React, {useState, useEffect} from 'react'
import './style.css'
import ImagePhoto from '../imgs/image.jpg'

const Image = props => {

    (function test() {
        console.log('test');
    })();

    useEffect(() => {
        console.log(props.bottonValue);
        return () => {
            console.log('clean up');
        }
    });

    return (
        <div className = 'imageAndTextContainer'>
            <img 
                className = 'imageStyle'
                src = {ImagePhoto} 
                alt = 'image' 
            />

            {
                (props.bottonValue === 'SIGN IN' ?
                    <div>
                        <h1 className = 'top-left'>Hello, Friend!</h1>
                        <p className = 'bottom-left'>Enter your personal details and start journey with us</p>
                    </div>
                    :
                    <div>
                        <h1 className = 'top-left'> Welcome Back! </h1>
                        <p className = 'bottom-left'>To keep connected with us please login with your personal info</p>
                    </div>
                    
                )
            }

            <button 
                onClick = {() => props.handleClick()}
                className = 'button-on-image' 
                type = 'botton'
            >
                {props.bottonValue}
            </button>
            
        </div>
    )
}

export default React.memo(Image);