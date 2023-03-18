import Header from "../components/Header"
import type { NextPage } from "next";
import styles from "../styles/MyNfts.module.css";
import { ThirdwebNftMedia, useAddress, useContract, useNFTs } from "@thirdweb-dev/react";
import { getSystemErrorName } from "util";
import { useState } from "react";

const MyNfts: NextPage = () => {
  const { contract } = useContract("0x42c0B0F313FEcD3dCdd5C79a16025c47C62Fa948");
  const { data: nfts, isLoading, error } = useNFTs(contract);

  const address = useAddress();
  const [name, setName] = useState("");

  const seeName = (id: string) => {
    contract?.call("names", id).then(data => setName(data)).catch(err => setName(""))
  }

  return (
   
        <div className={styles.container}>
          <Header />
          {name ? <p>{name} </p> : null}
          <section className={styles.info}>
            {isLoading ? <p>Loading.. </p> : 
            nfts?.filter(nft => nft.owner == address).map(nft => {
              return (
              <div key = {nft.metadata.id} > 
                <ThirdwebNftMedia 
                  metadata={nft.metadata} 
                  height = "200"
                  style={{borderRadius: "10px"}}
              /> 
              <p>  ID: {nft.metadata.id} | {nft.metadata.name} </p>
              <button onClick = {() => seeName(nft.metadata.id) }> See name</button>
              </div> 
              )
            })}
          </section>
        </div>

        
  );
};

export default MyNfts;
