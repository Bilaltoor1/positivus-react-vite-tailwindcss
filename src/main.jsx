import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollButton from './components/ScrollButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ScrollButton/>
  </StrictMode>,
)
