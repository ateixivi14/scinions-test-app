import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import { useRouter } from "next/router";

import  styles from "../styles/Header.module.css"

const Header: React.FC = () => {

    const router = useRouter();
    
    return (
        <div className={styles.container}>
            <div>
                <Link  legacyBehavior href={"/"}>
                    <a className={router.pathname == "/" ? styles.active : styles.link}>Claim</a>
                </Link>

                <Link  legacyBehavior href={"/nfts"}>
                    <a className={router.pathname == "/nfts" ? styles.active : styles.link}>NFTS</a>
                </Link>

                <Link  legacyBehavior href={"/my-nfts"}>
                    <a className={router.pathname == "/my-nfts" ? styles.active : styles.link}>My NFTS</a>
                </Link>

                <Link  legacyBehavior href={"/set-name"}>
                    <a className={router.pathname == "/set-name" ? styles.active : styles.link}>Set Name</a>
                </Link>

            </div>
            <ConnectWallet  accentColor="#9FBBFA"/>
        </div>
    )
}

export default Header;