import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Index.css'
import useLocalStorage from 'use-local-storage'
import ThemeContext from './theme-context/ThemeContext.jsx'


const Main = () => {

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)


  return (
    <div>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <App />
      </ThemeContext.Provider>

    </div>
  )
}


createRoot(document.getElementById('root')).render(
    <Main />
)


export default Main