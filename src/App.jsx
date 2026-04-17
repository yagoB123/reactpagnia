import { AboutMe } from './AboutMe'
import './App.css'
import { Top10 } from './Top10'
import './Top10.module.css'
import { CookieClicker } from './cookieclicker'
import './cookieclicker.module.css'
import { Pokemon } from './Pokemon'
import './pokemon.module.css'
function App() {
  

  return (
    <>
      <div>
        <AboutMe />
        <Top10 />
        <CookieClicker />
        <Pokemon />
      </div>
    </>
  )
}

export default App
