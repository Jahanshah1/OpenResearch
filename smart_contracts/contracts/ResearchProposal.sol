pragma solidity ^0.8.0;

contract ResearchProposal {
    // mapping of proposal ID to wallet addresses
    mapping (uint => address) public proposalsByID;

    // mapping of wallet addresses to proposal CIDs
    mapping (address => string) public proposalsByAuthor;

    // event for when a proposal is submitted
    event NewProposal(address indexed author, string cid);

    uint proposalCount = 0;

    // function to submit a proposal
    function submitProposal(string memory cid) public {
        proposalsByAuthor[msg.sender] = cid;
        proposalsByID[proposalCount] = msg.sender;
        proposalCount++;
        emit NewProposal(msg.sender, cid);
    }

    // function to retrieve proposals
    function getProposals() public view returns (string[] memory) {
        string[] memory proposalCIDs = new string[](proposalCount);
        for (uint i = 0; i < proposalCount; i++) {
             address proposalAuthor = proposalsByID[i];
             proposalCIDs[i] = proposalsByAuthor[proposalAuthor];
        }

        return proposalCIDs;
    }
}

//HTTP provider quicknode : https://orbital-convincing-diagram.matic-testnet.discover.quiknode.pro/da69caeb5247aa28900c44faece3cf4e7b814efd/