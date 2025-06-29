import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './components/AboutMe';
import EducationSection from './components/EducationSection';

function App() {
  // const [count, setCount] = useState(0)

   return (
    <div>
      <AboutMe />
      <EducationSection />

    </div>
  );
}

export default App
