import React, { useState, useEffect, useContext } from "react";

import Web3Modal from 'web3modal';

import { ethers } from "ethers";

import { crowdFundingABI, crowdFundingAddress } from "./constants";

const fetchContract = (signerOrprovider) => {
  const contract = new ethers.Contract(
    crowdFundingAddress,
    crowdFundingABI,
    signerOrprovider
  );

  return contract;
};

export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({ children }) => {

  const titleData = "Crowd Funding Contract";

  const [currentAccount, setCurrentAccount] = useState("");

  const createCampaign = async (campaign) => {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    const currentAccount = accounts[0];

    const { title, description, amount, deadline } = campaign;

    const web3modal =new Web3Modal();

    const connection = await web3modal.connect();

    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(signer);

    console.log(currentAccount, ":currentAccount");

    try {
      const transaction = await contract.createCampaign(
        currentAccount,
        title,
        description,
        ethers.utils.parseUnits(amount, 18),
        new Date(deadline).getTime()
      );

      const receipt = await transaction.wait();

      console.log("receipt - contract call success", receipt);
    } catch (err) {
      console.error(err);
    }
  };

  const getCampaigns = async () => {
    const provider = new ethers.providers.JsonRpcProvider();

    const contract = fetchContract(provider);

    const campaigns = await contract.getCampaigns();

    const parsedCampaigns = campaigns.map((campaign, i) => (
       {
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        goal: ethers.utils.formatEther(campaign.goal.toString()),
        deadline: campaign.deadline.toNumber(),
        amountCollected: ethers.utils.formatEther(
          campaign.amountCollected.toString()
        ),
        pId: i,
      })
    );

    return parsedCampaigns;
  };

  const getUserCampaigns = async () => {
    const provider = new ethers.providers.JsonRpcProvider();

    const contract = fetchContract(provider);

    const allCampaigns = await contract.getCampaigns();

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    const currentUser = accounts[0];

    console.log(currentUser, "currentUser")

    const filteredCampaigns = allCampaigns.filter(
      (campaign) =>
        campaign.owner === "0x07bc9628B527FA7904B107A70D5881B074aB3828"
    );

    const userData = filteredCampaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      goal: ethers.utils.formatEther(campaign.goal.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      pId: i,
    }));

    return userData;
  };

  const donate = async (pId, amount) => {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();

    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(signer);

    console.log('====================================');
    console.log(contract, "contract");
    console.log('====================================');

    const campaignData = await contract.donateToCampaign(pId, {
      value: ethers.utils.parseEther(amount),
    });

    await campaignData.wait();
    location.reload();

    console.log(campaignData, "campaignData");

    return campaignData;
  };

  const getDonations = async (pId) => {
    
    const provider = new ethers.providers.JsonRpcProvider();

    const contract = fetchContract(provider);

    const donations = await contract.getDonators(pId);

    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
  };

  // CHEcK IF USER IS CONNECTED TO METAMASK

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return setOpenError(true), setError("Make sure you have metamask!");
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (err) {
      console.error(err, "something went wrong");
    }
  };

  // CONNECT WALLET

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Get metamask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);

      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.error(err, "something went wrong connecting to wallet");
    }
  };

  return (
    <CrowdFundingContext.Provider
      value={{
        titleData,
        currentAccount,
        connectWallet,
        createCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
        checkIfWalletIsConnected,
      }}
    >
      {children}
    </CrowdFundingContext.Provider>
  );
};
