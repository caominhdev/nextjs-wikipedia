import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Coder Wikipedia | Home</title>
                <meta name='keywords' content='coders' />
            </Head>
            <main>
                <h1 className={styles.title}>Home Page</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum
                    dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,
                    consectetur adip Lorem ipsum dolor sit amet, consectetur
                    adip Lorem ipsum dolor sit amet, consectetur adip Lorem
                    ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
                    amet, consectetur adip Lorem ipsum dolor sit amet,
                    consectetur adip
                </p>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum
                    dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,
                    consectetur adip Lorem ipsum dolor sit amet, consectetur
                    adip Lorem ipsum dolor sit amet, consectetur adip Lorem
                    ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
                    amet, consectetur adip Lorem ipsum dolor sit amet,
                    consectetur adip
                </p>
                <Link href='/coders/'>
                    <span className='btn'>See All Coders</span>
                </Link>
                <style jsx>
                    {`
                        .btn {
                            display: block;
                            width: 150px;
                            padding: 8px 0;
                            margin: 20px auto;
                            border-radius: 4px;
                            color: black;
                            text-align: center;
                            background-color: #ffbf49;
                        }
                    `}
                </style>
            </main>
        </>
    )
}
