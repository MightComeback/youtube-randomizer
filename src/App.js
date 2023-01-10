import React from 'react';
import Hero from './components/Hero';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div className='bg-main-pattern bg-cover bg-no-repeat min-h-screen overflow-hidden'>
      <Hero />
      <WelcomePage />
    </div> 
  );
}

export default App;
