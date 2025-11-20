
import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import SignInForm from './sign-in-sign-up/SignInForm'
import SignUpForm from './sign-in-sign-up/SignUpForm'
import NotFound from './sign-in-sign-up/NotFound'
import TodoCards from './todo-cards/TodoCards'
import DarkMode from './dark-mode/DarkMode'
import './App.css'
import ThemeContext from './theme-context/ThemeContext'
import TodoList from './todo-list/TodoList'
import JokeApi from './joke-api/JokeApi'
import ShareButton from './share-button/ShareButton'

const App = () => {

  return (
    <BrowserRouter>
      <div className='app' >
        <div className='app-container'>
          <Routes>
            <Route path='/todo' element={<TodoCards />} />
            <Route path='/signin' element={<SignInForm />} />
            <Route path='/signup' element={<SignUpForm />} />
            <Route path='/*' element={<NotFound />} />
            <Route path='/darkmode' element={<DarkMode />} />
            <Route path='/todolist' element={<TodoList />} />
            <Route path='/joke' element={<JokeApi />} />
            <Route path='/share' element={<ShareButton />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App