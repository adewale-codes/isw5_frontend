import { useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import MarqueeSection from './components/MarqueeSection'
import Features from './components/Features'
import Multiple from './components/Multiple'
import Modal from './components/Modal'
import Blog from './components/Blog'
import Footer from './components/Footer'
function App() {

  const homeRef = useRef<HTMLDivElement >(null);
  const featureRef = useRef<HTMLDivElement >(null);
  const contactRef = useRef<HTMLDivElement >(null);
  const blogRef = useRef<HTMLDivElement >(null);
  

  return (
    <>
      <Nav homeRef={homeRef} featureRef = {featureRef} contactRef={contactRef} blogRef={blogRef} /> 
      <Hero ref={homeRef} />
      <MarqueeSection />
      <Features ref={featureRef} />
      <Multiple />
      <Modal />
      <Blog ref={blogRef} />
      <Footer ref={contactRef} />
    </>
  )
}

export default App