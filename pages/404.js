import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='not-found'>
            <h1>Ooops...</h1>
            <h2>That page cannot be found... </h2>
            <p>
                Going back to the{' '}
                <Link href='/'>
                    <span>Homepage</span>
                </Link>
            </p>
        </div>
    )
}
