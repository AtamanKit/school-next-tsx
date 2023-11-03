import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Page() {
  return (
    <>
      <h1>Hello, Home Page!</h1>
      <br />
      <Link href="/dashboard">Dashboard</Link>
    </>
  )
}
