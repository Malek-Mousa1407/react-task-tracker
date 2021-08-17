import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='about'>
            <div className='layer'>
                <h4>Version 1.0.0</h4>
                <Link to='/' id='link'>Go Back</Link>
            </div>              
        </div>
    )
}

export default About
