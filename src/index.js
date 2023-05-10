import { createRoot } from 'react-dom/client'
import { Logo } from '@pmndrs/branding'
import './styles.css'
import App from './App'

function Overlay() {
  return <div></div>
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
  </>
)
