import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './components/AboutMe';
import EducationSection from './components/EducationSection';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  // const [count, setCount] = useState(0)

   return (
    <div>
      <AboutMe />
      <EducationSection />
      <Projects />
      <Experience />
      <Skills />

    </div>
  );
}

export default App
