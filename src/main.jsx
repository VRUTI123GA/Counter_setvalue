import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Input} from './assets/input/counter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Input/>
  </StrictMode>,
)
