import React from 'react'
import logo from '../../Assets/Gym-Lion.png'
import back from '../../Assets/back.png';
import sweat from '../../Assets/sweat.png';
import center from '../../Assets/center .png';


import './Header.css';
import { Link } from 'react-router-dom';

export default function Header({ popups }) {
    return (
        <div className='head'>
            <img className='back' src={back} alt="" />
            <div className='left'>
                <img className='images' src={logo} alt='' />
                <div></div>
                {/* for best */}
                <div className='thebest'>
                    <button className='buts'>
                        <p className='inside'>THE BEST FITNESS CLUB IN TOWN</p><span className='inbest'></span>
                    </button></div>
                {/* for shape your body */}
                <div className='hero'>
                    <div>
                        <span className='text'>SHAPE  </span>
                        <span className='text1' > YOUR IDEAL BODY</span>
                    </div>
                    <div >
                        <span> </span>
                    </div>

                    <div >

                    </div>

                    <div>

                        <Link to="/Sign_In" onClick={popups}>
                            <button className="buttonss"><p>JOIN US</p></button>
                        </Link>

                        {/* <a href="/Sign_In">
                            <button className="buttonss" onClick={popups}>
                                <p>JOIN US</p> </button>
                        </a> */}

                    </div>
                </div>

            </div>
            <div className='right'>
                <ol>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#home">PROGRAMS</a></li>
                    <li><a href="#home">WHY US</a></li>
                    <li><a href="#home">PLANS</a></li>
                    <li><a href="#home">TESTIMONIALS</a></li>
                </ol>
                <br />
                <div className='forms'>
                    <img className='sweat' src={sweat} alt='' />
                    <img className='shape' src={center} alt='' />
                </div>
            </div>
        </div>
    )
}

