import Header from "../components/Header"
import type { NextPage } from "next";
import styles from "../styles/SetName.module.css";
import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

const SetName: NextPage = () => {

  const [id, setId] = useState("");
  const [name, setName] =  useState("");

  const { contract } = useContract("0x42c0B0F313FEcD3dCdd5C79a16025c47C62Fa948");

  const {
    mutate: write,
    isLoading,
    error,
  } = useContractWrite(contract, "setScinionName")

  return (
    
        <div className={styles.container}>
          <Header />
          <p>Give your scinion a name!</p>
          <section className={styles.info}>
            <p className="label"> ID: </p>
            <input 
              type= "text"
              name= "id"
              value= {id}
              onChange={(e) => setId(e.target.value)}
            />

            <p className="label"> Name: </p>
            
            <input 
              type= "text"
              name= "name"
              value= {name}
              onChange={(e) => setName(e.target.value)}
            />
              <br/>
            <button disabled= {isLoading} onClick={()=> {write([id, name])}}>
            
             Give him/her a name!
            </button>
            {error ? <p>{error.toString()}</p>: null}
          </section>
        </div>

        
  );
};

export default SetName;
