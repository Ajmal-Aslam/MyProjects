import React, { useState } from 'react';
import './Popup.css';
import { Link } from 'react-router-dom'


export default function Popup({ popups }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Checkbox = () => {
        setIsChecked(!isChecked);
    };

    const handleSignIn = () => {
        if (email && password) {
            setIsLogged(true);
        }
    };
    return (
        <div className='pop_up'>
            <a href="/Home">
                <button className="x" onClick={popups}>
                    <p>X</p> </button>
            </a>

            <div className='signin'>
                <h1>Login</h1>
                <p>Welcome back! Please login to continue!</p>
                <input type='email' placeholder='username' require='' pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='password' require='' value={password} onChange={(e) => setPassword(e.target.value)} />

                <div>
                    <input
                        type='checkbox'
                        checked={isChecked}
                        onChange={Checkbox}
                    />
                    <label> Remember Me</label>
                </div>

                <a href='#'>Forgot Password</a>
                <button className='formsumbmit' onClick={handleSignIn}> SIGN IN</button>

                <div>
                    {isLogged && (
                        <div className="success-message">
                            Successfully logged in!
                        </div>
                    )}
                </div>

                <span>Dont have an account?
                    <p><Link to="/Sign_Up">Sign Up</Link></p>

                    {/* <a id="signup" href="/Sign_Up">Sign Up</a> */}


                    {/* <a id='signup' href='/Sign_Up'>Sign Up</a> */}
                </span>
            </div>
        </div>
    )
}

