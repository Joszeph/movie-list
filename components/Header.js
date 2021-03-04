import Nav from '../components/Nav'
import styles from '../styles/Header.module.css'
import Image from 'next/image'

const Header =()=>{
    return(
        <div className={styles.header}>
        <Image src="/Milara_logo_Dark_Gray_GB.png" width={200} height={50}/>
        <Nav />
        </div>
    )
}

export default Header