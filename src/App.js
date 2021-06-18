import React from 'react'
import './App.css';

// Components
import Navbar from './components/nav/nav.jsx';
import Header from './components/header/header.jsx'
import FirstSection from './components/firstSection/firstSection';
import SecondSection from './components/secondSection/secondSection';
import ThirdSection from './components/thirdSection/thirdSection';
import FourthSection from './components/fourthSection/fourthSection';
import FifthSection from './components/fifthSection/fifthSection';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </>
  );
}

export default App;
