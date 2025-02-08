import React from 'react'
import Link from 'next/link'
import styles from '@/app/navbar.module.css'

const Navbar = () => {
  return (
   <>
   <nav>
   <ul className='flex flex-row justify-center mt-4 font-bold'>
   <li className={styles.list}><Link href="/">Home</Link></li>
   <li className={styles.list}><Link href="/about">About</Link></li>
   <li className={styles.list}><Link href="/blog">Blog</Link></li>
   <li className={styles.list}><Link href="/contact">Contact</Link></li>
   </ul>
   </nav>
   </>
  )
}

export default Navbar