import Header from './header'
import Hero from './Hero'
import About from './about'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

