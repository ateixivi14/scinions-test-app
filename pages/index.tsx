import Header from "../components/Header"
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";


const Home: NextPage = () => {
  return (
   
        <div className={styles.container}>
          <Header />
          <section className={styles.info}>
          <img className = {styles.logo} src="./logo-2.png"  />
            <h1>Welcome to scinions</h1>
           <h3>This is a blockchain science game</h3>
          
              <Web3Button
                accentColor="#9FBBFA"
                contractAddress="0x42c0B0F313FEcD3dCdd5C79a16025c47C62Fa948"
                action={(contract) => contract.erc721.claim(1)}>
                  Claim Scinion
              </Web3Button>
          </section>
        </div>

        
  );
};

export default Home;
