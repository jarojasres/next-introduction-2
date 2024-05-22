import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="flex rounded p-4">
      <Link href="/" className="mr-4">Home</Link>
      <div className="flex flex-1"></div>
      <Link href="/s2s" className="mr-4">S2S</Link>
      <Link href="/rtp" className="mr-4">Rtp</Link>
      <Link href="/brands" className="mr-4">Brands</Link>
    </nav>
  )
}
