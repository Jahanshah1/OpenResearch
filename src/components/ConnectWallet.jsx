import {useState, useEffect} from 'react';
import Web3 from 'web3';

const ConnectWallet = () => {
    const [Account, setAccount] = useState()

    useEffect(() => {
        const acc = async () => {
            const web3 = new Web3(Web3.givenProvider)
            const Account = await web3.eth.requestAccounts()

            setAccount(Account[0])

        }
        acc()
    }, [Account])

    return(
        <div>
            <button className="cyberpunk-button" onClick={Account}>
                connect wallet
            </button>
            your account : {Account}
        </div>
    )
}

export default ConnectWallet;
