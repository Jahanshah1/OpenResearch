import React from 'react'
import { useHistory } from 'react-router-dom';
import { Divider, Grid, Image, Segment } from 'semantic-ui-react';
import { ReactSVG } from 'react-svg';
import Rive from '@rive-app/react-canvas';
import Glass from './441-812-magnifier-animation-for-search-bars.riv'
import ConnectWallet from './ConnectWallet';


const Home = () => {

  
  const handleClick = () => {
    window.location.assign('https://open-research-jahanshah1.vercel.app/Application')
  }

  return (
   
  
<div className="h-screen bg-[#222629]">
  <nav className="p-4 flex items-center justify-between">
    <div className="w-3/4 flex justify-start">
    



  

      <div className="text-6xl font-[poppins] text-white hidden sm:block" style={{marginLeft:'80px', marginTop:'100px'}}>
        First decentralised platform for publishing research proposals on the blockchain
        <div className='sm:block md:hidden lg:hidden xl:hidden'>
          jfndm 
        </div>
      </div>
      <div className='sm:block md:hidden lg:hidden xl:hidden text-3xl text-white font-poppins flex justify-center' style={{marginTop:'30px',}}>
          First Dapp for publishing research papers on the blockchain.
          <br />
          <br />
          Please use a desktop :)
        </div>
     




  
</div>


    

    <div className="w-1/4 flex justify-end">
    </div>
  </nav>


     


  {/*<div className="body-right-div flex justify-end font-[poppins] text-white bg:bg-1" style={{marginRight:'70px', marginTop:'20px'}}>
 hgghc jhgg bhgh kjhhub
  </div>*/}
  <div className="relative flex items-center justify-center h-full bg-[#222629]">
 
  <div className="sm:block md:hidden lg:hidden xl:hidden text-white" style={{marginBottom:'480px',marginLeft:'50px'}}>
        <h2>Unfortunately this App is not compatible with smartphones at the moment</h2>

      </div>
      
  <button className="cyberpunk-button hidden sm:block" onClick={handleClick}>
   Launch App
  </button>
  <div className="card text-xl hidden sm:block" style={{marginBottom:'480px',marginRight:'1000px'}}>
    <div className="align">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
    </div>

    <h1>Purpose</h1>
    <p>
    By using this platform, scientists and researchers can securely
     store and share their research data without the fear of it being
      tampered with or compromised. This is made possible by the use of
      InterPlanetary File System IPFS
    </p>
    </div>


    <div className="card text-xl hidden sm:block" style={{marginBottom:'480px', marginRight:'550px'}}>
    <div className="align">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
    </div>

    <h1>How</h1>
    <p>
      This platform allows the research data to be stored in a distributed manner across multiple nodes, rather than being stored 
      in a central location, which makes it much more resistant to tampering or interference. Overall, this decentralised platform 
      provides a secure and reliable way for scientists and researchers to share research proposals and data within the scientific 
      community
    </p>

    </div>
    

    <div className="card text-xl hidden sm:block" style={{marginBottom:"480px",marginRight:'100px'}}>
    <div className="align">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
    </div>

    <h1>About</h1>
    <p>
      Created by Jahan Shah
    </p>
    
    </div>
   



  </div>
  { /*<ConnectWallet />*/}
 {/*test*/}
</div>


  )
}

export default Home;
