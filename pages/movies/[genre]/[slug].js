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
    const { API_URL } = process.env
    const {slug} = context.query
    
    const res = await fetch(`${API_URL}/movies?slug=${slug}`)
    const data = await res.json()
    
    return{
        props:{
             movie:data[0]
            }
        }
    }

export default Movie