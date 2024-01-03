import './App.css'
import {About ,HeroPage,Contact,Portfolio,Resume,Service}from './components/Home'

function App() {
  return (
    <section className='relative h-screen w-full overflow-scroll'>
      <HeroPage/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Service/>
      <Contact/>
    </section>
  )
}

export default App
