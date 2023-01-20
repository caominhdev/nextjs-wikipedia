import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Coder.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { coders: data },
    }
}

export default function AllCoders({ coders }) {
    return (
        <>
            <Head>
                <title>Coder Wikipedia | All Coders</title>
                <meta name='keywords' content='All Coders' />
            </Head>

            <div>
                <h1>All Coders</h1>
                {coders.map((coder) => {
                    return (
                        <Link href={'/coders/' + coder.id} key={coder.id}>
                            <span className={styles.single}>
                                <h3>{coder.name}</h3>
                            </span>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}
