import Header from "../components/Header"
import type { NextPage } from "next";
import styles from "../styles/Nfts.module.css";
import { ThirdwebNftMedia, useContract, useNFT, useNFTs } from "@thirdweb-dev/react";

const Nfts: NextPage = () => {
  const { contract } = useContract("0x42c0B0F313FEcD3dCdd5C79a16025c47C62Fa948");
  const { data: nfts, isLoading, error } = useNFTs(contract);

  console.log(nfts);

  return (
   
        <div className={styles.container}>
          <Header />
          <section className={styles.info}>
            {isLoading ? <p>Loading.. </p> : nfts?.map(nft => {
              return (
              <div key = {nft.metadata.id}> 
                <ThirdwebNftMedia 
                  metadata={nft.metadata} 
                  height = "200"
                  style={{borderRadius: "10px"}}
              /> 
              <p> ID: {nft.metadata.id} | {nft.metadata.name} </p>
              </div> 
              )
            })}
          </section>
        </div>

        
  );
};

export default Nfts;
