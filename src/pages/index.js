import React, { useEffect, useContext, useState } from "react";

import { CrowdFundingContext } from "./../../Context/CrowdFunding";

import { Hero, Card, PupUp } from "../../Components";

function index() {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    currentAccount,
    donate,
    getUserCampaigns,
    getDonations,
    
  } = useContext(CrowdFundingContext);

  const [allCampaigns, setAllCampaigns] = useState([]);
  const [userCampaigns, setUserCampaigns] = useState([]);



  useEffect(() => {

    const getCampaignsData = getCampaigns();
    const userCampaignData = getUserCampaigns();

    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignData;

      console.log(allData, "allData");

      console.log(userData, "userData");

      setAllCampaigns(allData);
      setUserCampaigns(userData);
    };
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign, "donateCampaign");

  console.log(currentAccount, "currentAccount");

  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />
      {allCampaigns && allCampaigns.length > 0 && (
        <>
          <Card
            allCampaigns={allCampaigns}
            setOpenModal={setOpenModal}
            setDonate={setDonateCampaign}
            title="All Listed Campaigns"
          />
        </>
      )}
      {userCampaigns && userCampaigns.length > 0 && (
        <>
          <Card
            allCampaigns={userCampaigns}
            setOpenModal={setOpenModal}
            setDonate={setDonateCampaign}
            title="Your Created Campaigns"
          />
        </>
      )}

      {openModal && (
        <PupUp
          setOpenModal={setOpenModal}
          getDonations={getDonations}
          donateFunction={donate}
          donate={donateCampaign}
        />
      )}
    </>
  );
}

export default index;
