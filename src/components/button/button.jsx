import React from 'react'
import './button.css'

const button = ({ title, action }) => {
    return (
        <>
            <button className='btn' onClick={action}>
                {title}
            </button>
        </>
    )
}

export default button
