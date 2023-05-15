//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;


contract CrowdFunding {
  
  struct Campaign {
   address owner;
   string title;
    string description;
    uint256 goal;
    uint256 deadline;
    uint256 amountCollected;
    address[] donators;
    uint256[] donations;

  }

  mapping(uint256 => Campaign) public campaigns;

  uint256 public numberOfCampaigns = 0;


  function createCampaign(address _owner,string memory _title, string memory _description, uint256 _goal, uint256 _deadline) public returns(uint256) {
   
   Campaign storage campaign = campaigns[numberOfCampaigns];

   require(campaign.deadline < block.timestamp, "Deadline should be a date in future");

    campaign.owner = _owner;
    campaign.title = _title;
    campaign.description = _description;
    campaign.goal = _goal;
    campaign.deadline = _deadline;
    campaign.amountCollected = 0;

    numberOfCampaigns++;

    return numberOfCampaigns - 1;

  }


    function donateToCampaign(uint256 _campaignId) public payable {

        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_campaignId];
    
        // require(campaign.deadline > block.timestamp, "Deadline has passed");
        // require(msg.value > 0, "You need to send some ether");
    
        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);
        

       (bool sent, ) = payable(campaign.owner).call{value: amount}("");

        if(sent){
            campaign.amountCollected += amount;
        }

    }
   

   function getDonors (uint256 _campaignId) public view returns(address[] memory, uint256[] memory) {
      
    return (campaigns[_campaignId].donators, campaigns[_campaignId].donations);


   } 

   function getCampaigns () public view returns (Campaign[] memory){

        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for(uint i=0; i<numberOfCampaigns; i++){

            Campaign storage item = campaigns[i];

            allCampaigns[i] = item;


        }


        return allCampaigns;

   }


}