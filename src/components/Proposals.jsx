{/*import React, { useState } from "react";
import Web3Modal from "web3modal";
import { useWeb3Context } from "web3-react";




const ResearchProposal = () => {
  const [cid, setCid] = useState("");
  const context = useWeb3Context();

  const handleSubmit = async () => {
    const provider = new Web3Modal. providers.Web3Provider(context.library.provider);

    const contract = new context.library.eth.Contract(
      [ABI
      
      ],
      ['Contract address'],
      provider
    );

    await contract.functions.submitProposal(cid);
  };

  const handleGetProposals = async () => {
    const provider = new Web3Modal. providers.Web3Provider(context.library.provider);

    const contract = new context.library.eth.Contract(
      [ABI],
      ['contract address'],
      provider
    );

    const proposals = await contract.functions.getProposals();
    console.log(proposals);
  };

  return (
    <div>
      <input
        type="text"
        value={cid}
        onChange={(e) => setCid(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Proposal</button>
      <button onClick={handleGetProposals}>Get Proposal</button>
    </div>
  );
};

export default ResearchProposal;*/}

