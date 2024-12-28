import Hero from "../sections/Hero"
import About from "../sections/About"
import Skills from "../sections/Skills"
import Contact from "../sections/Contact"
const Home = () => {
  return (
<main className="flex flex-col justify-center items-center">
 <Hero/>
 <About/>
 <Skills/>
 <Contact/>
</main>
  )
}

export default Home
