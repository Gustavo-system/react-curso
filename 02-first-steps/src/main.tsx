import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepApp } from './FirstStepsApp'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <FirstStepApp />
    </StrictMode>,
)
