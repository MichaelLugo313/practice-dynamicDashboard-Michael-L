import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import TaskDashboard from './TaskDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskDashboard />
  </StrictMode>,
)
