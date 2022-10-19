import React, { useState, useRef, useEffect } from 'react'
import { useInViewport } from 'react-in-viewport'
import { useTranslation } from "react-i18next";
import './Metaverse.css'


function Metaverse() {
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
        <body id='metaverse-studio' className='body_metaverse'>
            
            <div   className='picture_metaverse'>
                <div loading="lazy" className='pic' >
                
                <div className='container_metaverse'>
        <h2 className='h2_metaverse'>METAVERSE STUDIO</h2>
        <p className='p_metaverse'>{t("metaverse.text")}</p>
        </div>
       
                </div>
           
            </div>
           
           </body>


         
          
        
            
    

    
    );
}


export default Metaverse;