import React, { useState } from 'react';
import spinner from './../../assets/icons/spinning-circles.svg';
import './Loader.scss';
import { ethers } from 'ethers';


const [walletAddress, setWalletAddress] = useState("");

// Helper Functions

// Requests access to the user's META MASK WALLET
// https://metamask.io
async function requestAccount() {
  console.log('Requesting account...');

  // ❌ Check if Meta Mask Extension exists 
  if(window.ethereum) {
    console.log('detected');

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.log('Error connecting...');
    }

  } else {
    alert('Meta Mask not detected');
  }
}

// Create a provider to interact with a smart contract
async function connectWallet() {
  if(typeof window.ethereum !== 'undefined') {
    await requestAccount();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
  }
}

const Loader = () => (
  <>
    {/* <img className="spinner-circles" src={spinner} /> */}
    <button
        // onClick={requestAccount}
        className='button_main'
        
        >Request Account</button>
        <h3>Wallet Address: something</h3>
  </>
);

export default Loader;
