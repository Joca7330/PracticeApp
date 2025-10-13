import React, { useState } from 'react'
import useLocalStorage from 'use-local-storage'
import { useContext } from 'react'
import ThemeContext from '../theme-context/ThemeContext'
import './DarkMode.css'


const DarkMode = () => {

    // const theme = useContext(Context)
    // console.log(theme)
    const theme = useContext(ThemeContext)
    console.log(theme)

    // Toggle dark mode on click
    const toggleTheme = () => {
        theme.setDarkMode(prevState => !prevState)
    }

    return (
        <div className='dark-mode-container'
            data-theme={theme.darkMode ? 'dark' : 'light'}
        >
            <div className='box-container' >
                <div className='title'> Hello World </div>
                <button className='box-button'
                    onClick={toggleTheme}
                >I am a box</button>
            </div>
        </div>

    )
}

export default DarkMode