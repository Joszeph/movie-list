import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return ( 
        <nav className={styles.nav}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contacts"><a>Contacts</a></Link>
        </nav>
     );
}
 
export default Nav;