"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'
import style from 'styled-jsx/style'

const Sidebar = () => {
  const pathname = usePathname()
  
  return (
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4'>
        <Link href="/" className='sidebar-logo'>
          <Image src="/assets/images/logo.png" alt="logo" width={150} height={50} />
        </Link>

        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className='sidebar-nav_elements'>
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname
                return(
                  <li 
                    key={link.route} 
                    className={`sidebar-nav_element group
                      ${isActive ? 'bg-pink-400 shadow-inner text-white' : 'text-gray-700'}`}
                  >
                    <Link href={link.route} className='sidebar-link'>
                      <Image 
                        src={link.icon} 
                        alt="logo" 
                        width={24} height={24} 
                        className={`${isActive} && 'bg-gray-500' `} 
                      />
                      {link.label}
                    </Link>
                  </li>
                ) 
              })}
            </ul>

            <ul className='sidebar-nav_elements'>
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname
                return(
                  <li 
                    key={link.route} 
                    className={`sidebar-nav_element group
                      ${isActive ? 'bg-pink-400 shadow-inner text-white' : 'text-gray-700'}`}
                  >
                    <Link href={link.route} className='sidebar-link'>
                      <Image 
                        src={link.icon} 
                        alt="logo" 
                        width={24} height={24} 
                        className={`${isActive} && 'brightness-200' `} 
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <li className='flex-center cursor-pointer gap-2 p-4'>
              <UserButton afterSignOutUrl='/' showName />  
            </li>    
              
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-pink-gradient bg-cover">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar