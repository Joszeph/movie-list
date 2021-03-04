import Link from 'next/link'

import styles from '../../../styles/slug.module.css'

const Movie=({movie})=>{
    return(
        <div className={styles.movieInfo}>
        <h1>{movie.Title}</h1>
        <p>{movie.description}</p>
        <Link href="/">
            <a>Go back</a>
        </Link>
        </div>
    )
}

export const getServerSideProps = async(context)=>{

    const {slug} = context.query
    
    const res = await fetch(`http://localhost:1337/movies?slug=${slug}`)
    const data = await res.json()
    
    return{
        props:{
             movie:data[0]
            }
        }
    }

export default Movie