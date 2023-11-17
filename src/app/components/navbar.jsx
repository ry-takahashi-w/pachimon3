import Link from 'next/link'
import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    //htmlと少し異なり、jsxではclassじゃなくてclassNameを用いる
    <div className='navbar'>
        <div className='links'>
            {/* aタグと使い方は同じ */}
            <Link href='/'>Shop</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/cart'>Cart</Link>
        </div>
    </div>
  )
}

export default Navbar