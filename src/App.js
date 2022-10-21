import {useState, useEffect} from 'react';
import './App.css';
import Hero from './HeroSection/Hero';
import NavBar from '../src/NavBar/NavBar';

import ItWorks from './ItWorks/ItWorks';


import Services from './OurServices/OurServices'
import Footer from './Footer/Footer'
import Metaverse from './MetaverseSection/Metaverse'
import Factory from './FactorySection/Factory'

import Form from './Form/Form';
import Partners from './Partners/Partners'
import BackToTopButton from './NavBar/BackToTopButton';



import { BrowserRouter} from "react-router-dom";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [balanceInfo, setBalanceInfo] = useState({
    address: "-",
    balance: "-"
  });

  const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

  return (
  
  <div className="overlay">
    <BrowserRouter>
    
  <div className="App">
  

    <div className="NavBar">
      <NavBar accounts={accounts} setAccounts={setAccounts} />
      <BackToTopButton/>
   </div>
   
   <div className="moving-background" style={{ filter: `blur(${offsetY * 0.01}px`}}>
  </div>

  <div className="moving-background2"></div>

      <Hero accounts={accounts} setAccounts={setAccounts} />
      <ItWorks id='about'/>
      <Services id='process'/>
      <Metaverse id='metaverse'/>
      <Factory id='nft'/>
    <Partners id='partners'/>
    <Form balanceInfo={balanceInfo} setBalanceInfo={setBalanceInfo}/>
    <Footer id='contact'/>

  </div>
  </BrowserRouter>

</div>  

  );
}

export default App;
