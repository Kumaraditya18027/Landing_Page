'use client'

import React, { useEffect} from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: 'about',
  },
  {
    name: 'Contact',
    href: 'contactus',
  },
  {
    name: 'Services',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed w-full transition-all duration-300 ${
        isScrolled ? 'bg-white py-1 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
                    <span className="font-bold  font-serif  text-cyan-500 text-2xl">Landing Page</span>
        </div>
        <div className="hidden lg:flex flex-grow justify-end">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`text-sm font-bold ${
                    isScrolled ? 'text-gray-800' : 'text-gray-800'
                  } hover:text-gray-900`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-2">
                
                  <span className="font-bold text-2xl text-cyan-600">Landing Page</span>
                </div>
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 text-base font-bold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
