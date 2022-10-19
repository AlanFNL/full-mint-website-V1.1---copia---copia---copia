import {useRef, useState} from 'react';
import { ethers, BigNumber } from 'ethers';
import { Heading, Box, Button, Flex, Input, Text, FormControl, FormLabel, Select, FormHelperText} from "@chakra-ui/react";
import Nfts from './NFTS_json_files/Nfts.json';
import Nftes from './NFTS_json_files/Nftes.json';
import Monsters from './NFTS_json_files/Monsters.json';
import Test from './NFTS_json_files/Test.json'
import Swal from 'sweetalert2';





const NftsAddress = "0x480dAfDAF2D5C983439779115aa48f5Efc9cdA7a";
const MonstersAddress = "0xd603Ddc9324Ce205e0aE034B8deb3A0Fb88cEEcA";
const TestAddress = "0x1068aadB0F45EcffFB743a6E872678E8706bBfff";

const Web3 = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);
    const [balanceInfo, setBalanceInfo] = useState({
        address: "-",
        balance: "-"
      });
    const Tiene = balanceInfo.balance >= 1;
    const [whiteInfo, setWhiteInfo] = useState({
        address: "-",
        balance: "-"
      });
    const Tienee = whiteInfo.balance >= 1;

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                TestAddress,
                Test.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0 * mintAmount).toString()),
                });
                console.log('response: ', response);

            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    async function handleMintes() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                MonstersAddress,
                Monsters.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0 * mintAmount).toString()),
                });
                console.log('response: ', response);

            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 10) return;
        setMintAmount(mintAmount + 1);
    };




   const getMyBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const contract = new ethers.Contract(
        TestAddress,
        Test.abi,
        signer
    );
    
    const balance = await contract.balanceOf(signerAddress, 1)

    setBalanceInfo({
        address: signerAddress,
        balance: String(balance)
        
        
    });


  

   
    if (balanceInfo.balance >= 1) {
        Swal.fire({
            title: 'Increible',
            text: 'Usted es elegible para reclamar una búsqueda NFT',
            icon: 'success',
            timer: '5000'
        })
        
    } else if (balanceInfo.balance = 0) {
        
     
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


  
    

    const handleTransfer = async (e) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const tokenId = 1;
        const Destinatario = "0x81c379AC524F89c97EB6A8406F773667F1017359"
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const signerAddress = await signer.getAddress();
        const contract = new ethers.Contract(
            NftsAddress,
            Nfts.abi,
            signer
        );
        const tx = await contract["safeTransferFrom(address,address,uint256)"] (signerAddress, Destinatario, tokenId)
        try { 
            const receipt = await tx.wait()
            console.log(receipt)
            Swal.fire({
                title: '',
                text: 'Su NFT se ha transferido correctamente!',
                icon: 'success',
                timer: '5000'
            })
        } catch (err) {
            alert(err)
            

        }
    }

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
            Swal.fire({
                title: '',
                text: 'NFT Minteado correctamente',
                icon: 'success',
                timer: '5000'
            })
        } catch (err) {
            alert(err)
            

        }
    }

   
   
   
    return (

        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
                <Heading>HOLA</Heading>
        


            {isConnected ? (
                <div>
                    <Flex align="center" justify="center">
                        <Button 
                        backgroundColor="#3C17B5"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop="10px"
                        onClick={handleDecrement}
                          >
                          -
                          </Button>
                        <Input
                         readOnly
                         fontFamily="inherit"
                         width="100px"
                         height="40px"
                         textAlign="center"
                         paddingLeft="19px"
                         marginTop="10px"
                         type="number" 
                         value={mintAmount} 
                         />
                        <Button
                        backgroundColor="#3C17B5"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop="10px"
                         onClick={handleIncrement}
                         >
                         +
                         </Button>
                    </Flex>
                     <Button
                      backgroundColor="#3C17B5"
                      borderRadius="5px"
                      boxShadow="0px 2px 2px 1px #0F0F0F"
                      color="white"
                      cursor="pointer"
                      fontFamily="inherit"
                      padding="15px"
                      marginTop="10px"
                      onClick={handleWhitelist}>
                        WHITE
                      </Button>
                 
                    
                      <Text>Cuenta: {balanceInfo.address}</Text>
                      <Text>Balance actual: {balanceInfo.balance}</Text>
                      <Button
                       backgroundColor="#3C17B5"
                       borderRadius="5px"
                       boxShadow="0px 2px 2px 1px #0F0F0F"
                       color="white"
                       cursor="pointer"
                       fontFamily="inherit"
                       padding="15px"
                       marginTop="10px"
                      onClick={getMyBalance}>
                        VER BALANCE

                      </Button>
                      <Button
                       backgroundColor="#3C17B5"
                       borderRadius="5px"
                       boxShadow="0px 2px 2px 1px #0F0F0F"
                       color="white"
                       cursor="pointer"
                       fontFamily="inherit"
                       padding="15px"
                       marginTop="10px"
                      onClick={getWhite}>
                        VER WHITE

                      </Button>
                </div>
            ) : (
                <Text
                marginTop="70px"
                fontSize="30px"
                letterSpacing="-5.5%"
                fontFamily="Nunito"
                textShadow="0 3px #000000"
                color="#3AF3A3"
                >
                 Conectate con Metamask para entrar a la Web Inmersiva.
                </Text>
            )}
            </Box>

            {Tienee ? (
                <Button
                backgroundColor="#3C17B5"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
               onClick={getWhite}>
                 MINTEA YA MISMO NO HAY TIEMPO ES EL ULTIMO Q QUEDA

               </Button>
            ) : (
                <p></p>
            )} 

            
      
        </Flex>



    )
    
   
    
}

export default Web3;