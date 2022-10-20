import React, { useRef, useState } from 'react'
import './ItWorks.css'
import { useInViewport } from 'react-in-viewport'
import Spline from '@splinetool/react-spline';
import { useTranslation } from "react-i18next";
import { ethers } from 'ethers';
import Test from '../NFTS_json_files/Test.json'


function ItWorks() {

    const TestAddress = "0x1068aadB0F45EcffFB743a6E872678E8706bBfff";
    const [whiteInfo, setWhiteInfo] = useState({
        address: "-",
        balance: "-"
      });
    const Tienee = whiteInfo.balance >= 1;
    const [t, i18n] = useTranslation("global");
    

    const ref = useRef(null);
  const { inViewport } = useInViewport(
      ref,
      {rootMargin: "-100px"},
      { disconnectOnLeave: false},
      {}
  );
  
  const handleWhitelist = async (e) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const tokenId = 1;
    const amount = 1;
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const contract = new ethers.Contract(
        TestAddress,
        Test.abi,
        signer
    );
    const tx = await contract.whitelistMint(signerAddress, tokenId, amount) 
    try { 
        const receipt = await tx.wait()
        console.log(receipt)
        
        }
     catch (err) {
        alert(err)
        

    }
}

const getWhite = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const contract = new ethers.Contract(
        TestAddress,
        Test.abi,
        signer
    );
    
    const balance = await contract.whitelistedAddresses(signerAddress)

    setWhiteInfo({
        address: signerAddress,
        balance: String(balance)
        
        
    });

    if (whiteInfo.balance >= 1) {
        Swal.fire({
            title: 'Increible',
            text: 'Puede reclamar su NFT Gratis!',
            icon: 'success',
            timer: '5000'
        })
        
    } else if (whiteInfo.balance = 0) {
    }
}




    return (
        <body className='body_itworks'>
        <div id='about'>
            <div className='container_itworks'>
        <h2 className='h2_itworks'>{t("header.about-us")}</h2>
        <p className='p_itworks'>{t("header.about-us-text")}</p>
        <button onClick={getWhite} className='button_itworks'>
            
        </button>
        </div>
        </div>
        <div className='spline_model'>
        <Spline scene="https://prod.spline.design/MTGt6-GeQPy0x6H2/scene.splinecode" />

        </div>
        {Tienee ? (
            
                <button className='button_mint'
               onClick={handleWhitelist}>
                 <p className='button_claim'>{t("header.claim")}</p>

               </button>
            ) : (
                <p></p>
        )}

        </body>
   
    );
}


export default ItWorks;