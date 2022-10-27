import React, { useState, useRef, useEffect } from 'react'
import { useInViewport } from 'react-in-viewport'
import './Factory.css'
import { useTranslation } from "react-i18next";


function Factory() {
    const [t, i18n] = useTranslation("global");
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const ref = useRef(null);
    const { inViewport } = useInViewport(
        ref,
        {rootMargin: "-200px"},
        { disconnectOnLeave: false},
        {}
    );

    return (
        <body id='nft-factory' className='body_factory'>
            
            <div className='picture_factory'>
                <div loading='lazy' className='pic_factory' >
                
                <div className='container_factory'>
        <h2 className='h2_factory'>NFT FACTORY</h2>
        <p className='p_factory'>{t("factory.text")}</p>
        <div className='modal'>
        <a  href="https://chesterdrop.com/"className='btn_factory'>VER MÁS</a>
        </div>
        </div>
        
                </div>
                
            </div>
           
           </body>


         
          
        
            
    

    
    );
}


export default Factory;