import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Link href='/'>
                <div>Coder Wikipedia</div>
            </Link>
            <div>
                <Link href='/about'>About</Link>
                <Link href='/coders'>All Coders</Link>
            </div>
        </nav>
    )
}
