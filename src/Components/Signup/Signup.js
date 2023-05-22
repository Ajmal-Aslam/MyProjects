import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

export default function Signup({ popups }) {
    const [isSign, setIsSign] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [date, setDate] = useState('');
    const [tel, setTel] = useState('');

    const handleSignUp = () => {
        if (email && password && username && date && tel) {
            setIsSign(true);
        }
    };

    return (
        <div className='pop_up_sign'>
            <a href="/Home">
                <button className="x" onClick={popups}>
                    <p>X</p>
                </button>
            </a>
            <div className='signin'>
                <h1>Sign Up</h1>
                <p>Let's get started...</p>
                <input
                    type='text'
                    placeholder='Username'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type='date'
                    placeholder='Dob'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type='tel'
                    placeholder='Contact number'
                    value={tel}
                    onChange={(e) => {
                        const input = e.target.value;
                        const numbersOnly = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters
                        setTel(numbersOnly);
                    }}
                />
                <input
                    type='email'
                    placeholder='Email ID'
                    required

                    value={email}
                    onChange={(e) => {
                        const input = e.target.value;
                        const filteredInput = input.replace(/[^a-zA-Z0-9@._%+-]/g, ''); // Remove non-email characters
                        setEmail(filteredInput);
                    }}
                />
                <input
                    type='password'
                    placeholder='Password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='formsubmit' onClick={handleSignUp}>
                    SIGN UP
                </button>
                <div>
                    {isSign && (
                        <div className="success-message">
                            Your profile has been created successfully!
                        </div>
                    )}


                </div>
                <span>
                    Already have an account? <Link to="/Sign_In">Sign In</Link>.
                </span>
            </div>
        </div>
    );
}

// import React, { useState } from 'react';
// import './Signup.css';
// import { Link } from 'react-router-dom'

// export default function Signup({ popups }) {
//     const [isSign, setIsSign] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [username, setusernamel] = useState('');
//     const [date, setdate] = useState('');
//     const [tel, settel] = useState('');

//     const handleSignIn = () => {
//         if (email && password && username && date && tel) {
//             setIsSign(true);
//         }
//     };
//     return (
//         <div className='pop_up_sign'>
//             <a href="/Home">
//                 <button className="x" onClick={popups}>
//                     <p>X</p> </button>
//             </a>
//             <div className='signin'>
//                 <h1>Sign Up</h1>
//                 <p>Let's get started...</p>
//                 <input type='text' placeholder='username' require='' value={username} onChange={(e) => setEmail(e.target.value)} />
//                 <input type='date' placeholder='Dob' value={date} onChange={(e) => setPassword(e.target.value)} />
//                 <input type='tel' placeholder='Contact number' value={tel} onChange={(e) => setusernamel(e.target.value)} />
//                 <input type='email' placeholder='email-id' require='' value={email} onChange={(e) => setdate(e.target.value)} />
//                 <input type='password' placeholder='Password' require='' value={password} onChange={(e) => settel(e.target.value)} />
//                 <button className='formsumbmit' > SIGN UP</button>
//                 <div>
//                     {isSign && (
//                         <div className="success-message">
//                             Your profile created Sucessfully.......!
//                         </div>
//                     )}
//                 </div>
//                 <span>Already have an account?
//                     {/* <Link id="signup" href="/Sign_In">Sign In</a> */}
//                     <p><Link to="/Sign_In">Sign In</Link>.</p>
//                     {/* <a id='signup' href='/Sign_In'>Sign In</a> */}
//                 </span>
//             </div>
//         </div>
//     )
// }


