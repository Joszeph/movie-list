import fetch from 'isomorphic-unfetch'
import Card from '../components/Card'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = ({ movies }) => {
  // const dbUrl = 'http://localhost:1337'
  const { API_URL } = process.env
  console.log(movies)
  return (
      <div className={styles.container}>
          {movies.map(movie => (
            <div key={movie.id}>
             <Link href={`/movies/${movie.genre.slug}/${movie.slug}`} >
              <a>
                <Card movie={movie}/>
                <img src={API_URL+movie.Poster.url} alt={movie.Title} width={200} height={100}/>
              <h3>{movie.Title}</h3>
              </a>
            </Link>
            </div>
          ))}
      </div>
  )
}

export async function getServerSideProps() {
  
  // const dbUrl = 'http://localhost:1337'
  const { API_URL } = process.env

    const res = await fetch(`${API_URL}/movies`)
    const data = await res.json()

    return {
        props: {
            movies: data
        }
    }
}

export default Home