import Image from 'next/image'
import logo from '@/assets/logo.svg'
import Link from 'next/link'
import ListMovie from './sections/ListMovie'

export default function Home() {
  return (
    <>
    <header className="container mx-auto py-2">
    <nav className="flex justify-between items-center">
      <Image src={logo} alt="logo" width="100" height="100"/>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      <div>
        <Link href="/signin">Daftar</Link>
      </div>
    </nav>
    </header>
    <main>
      <ListMovie />
    </main>
    </>
  )
}
