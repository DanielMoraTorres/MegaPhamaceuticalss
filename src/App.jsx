import { useState, useEffect } from 'react'
import megaLogo from './assets/LOGO_MEGA.png'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

function App() {
  const [t, i18n] = useTranslation("global")
  const languageWindow = window.navigator.language.includes("es")

  useEffect(() => {
    languageWindow ?
      i18n.changeLanguage("es") :
      i18n.changeLanguage("en")
  }, [])
  return (
    <div className="App">
      <div>
        <img src={megaLogo} className="logo" alt="Vite logo" />
      </div>
      <div>
        <h1>{t("title")}<FontAwesomeIcon icon={faGear} className="preloader" style={{ fontSize: "30px", padding: "5px" }} /></h1>
      </div>
    </div>
  )
}

export default App
