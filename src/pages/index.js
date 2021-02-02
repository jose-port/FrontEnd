import React, { useState } from 'react'
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne, homeObjTwo,homeObjThree } from '../Components/InfoSection/Data';
import Navbar from '../Components/Navbar'
import Services from '../Components/Services';

import Sidebar from '../Components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
          <Sidebar isOpen={ isOpen } toggle={ toggle }/>
          <Navbar toggle={ toggle } /> 
          <HeroSection />
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Services />
          <InfoSection {...homeObjThree}/>
          <Footer />
        </>
    );
};

export default Home
