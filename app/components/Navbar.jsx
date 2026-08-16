import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const sideMenuRef = useRef(null)

    const openMenu = () => {
        setIsMenuOpen(true)

        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)'
        }
    }

    const closeMenu = () => {
        setIsMenuOpen(false)

        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)'
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && isMenuOpen) {
                closeMenu()
            }
        }

        window.addEventListener('keydown', handleEscape)

        return () => {
            window.removeEventListener('keydown', handleEscape)
        }
    }, [isMenuOpen])

    return (
        <>
            <div
                className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'
                aria-hidden='true'
            >
                <Image
                    src={assets.header_bg_color}
                    alt=''
                    priority
                    className='w-full'
                />
            </div>

            <nav
                aria-label='Primary navigation'
                className={`w-full fixed top-0 right-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
                    isScroll
                        ? 'bg-white/80 backdrop-blur-lg shadow-sm dark:bg-darkTheme/90 dark:shadow-white/20'
                        : ''
                }`}
            >
                {/* Logo / Personal Brand */}
                <a
                    href='#top'
                    className='mr-14 flex items-center shrink-0'
                    aria-label='Mohmadhusen Khimani - Full Stack MERN Developer'
                >
                    <span
                        className={`h-10 flex items-center text-2xl font-bold tracking-tight ${
                            isDarkMode ? 'text-white' : 'text-black'
                        }`}
                    >
                        Mohmadhusen<span className='text-red-500'>.</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 lg:px-12 py-3 ${
                        isScroll
                            ? ''
                            : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'
                    }`}
                >
                    <li className='font-Ovo'>
                        <a
                            href='#top'
                            className='transition-colors hover:text-red-500 focus-visible:text-red-500'
                        >
                            Home
                        </a>
                    </li>

                    <li className='font-Ovo'>
                        <a
                            href='#about'
                            className='transition-colors hover:text-red-500 focus-visible:text-red-500'
                        >
                            About Me
                        </a>
                    </li>

                    <li className='font-Ovo'>
                        <a
                            href='#experience'
                            className='transition-colors hover:text-red-500 focus-visible:text-red-500'
                        >
                            Experience
                        </a>
                    </li>

                    <li className='font-Ovo'>
                        <a
                            href='#skills'
                            className='transition-colors hover:text-red-500 focus-visible:text-red-500'
                        >
                            Skills
                        </a>
                    </li>

                    <li className='font-Ovo'>
                        <a
                            href='#work'
                            className='transition-colors hover:text-red-500 focus-visible:text-red-500'
                        >
                            Projects
                        </a>
                    </li>

                    <li className='font-Ovo'>
                        <a
                            href='#contact'
                            className='transition-colors hover:text-red-500 focus-visible:text-red-500'
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Actions */}
                <div className='flex items-center gap-4'>
                    {/* Theme Toggle */}
                    <button
                        type='button'
                        onClick={() => setIsDarkMode((prev) => !prev)}
                        className='flex items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:hover:bg-white/10'
                        aria-label={
                            isDarkMode
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        }
                        title={
                            isDarkMode
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        }
                    >
                        <Image
                            src={
                                isDarkMode
                                    ? assets.sun_icon
                                    : assets.moon_icon
                            }
                            alt=''
                            className='w-6'
                        />
                    </button>

                    {/* Desktop Contact CTA */}
                    <a
                        href='#contact'
                        className='hidden lg:flex items-center gap-3 px-8 xl:px-10 py-2.5 border border-gray-500 rounded-full ml-2 xl:ml-4 font-Ovo transition-all duration-300 hover:bg-black hover:text-white hover:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:border-white/50 dark:hover:bg-white dark:hover:text-black'
                    >
                        Contact
                        <Image
                            src={
                                isDarkMode
                                    ? assets.arrow_icon_dark
                                    : assets.arrow_icon
                            }
                            alt=''
                            className='w-3'
                        />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        type='button'
                        className='block md:hidden ml-1 rounded-full p-2 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:hover:bg-white/10'
                        onClick={openMenu}
                        aria-label='Open navigation menu'
                        aria-expanded={isMenuOpen}
                        aria-controls='mobile-navigation'
                    >
                        <Image
                            src={
                                isDarkMode
                                    ? assets.menu_white
                                    : assets.menu_black
                            }
                            alt=''
                            className='w-6'
                        />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 ${
                        isMenuOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={closeMenu}
                    aria-hidden='true'
                />

                <ul
                    id='mobile-navigation'
                    ref={sideMenuRef}
                    className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 dark:bg-darkHover dark:text-white shadow-xl'
                    aria-label='Mobile navigation'
                >
                    {/* Close Button */}
                    <li className='absolute right-6 top-6 list-none'>
                        <button
                            type='button'
                            onClick={closeMenu}
                            className='rounded-full p-2 transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:hover:bg-white/10'
                            aria-label='Close navigation menu'
                        >
                            <Image
                                src={
                                    isDarkMode
                                        ? assets.close_white
                                        : assets.close_black
                                }
                                alt=''
                                className='w-5'
                            />
                        </button>
                    </li>

                    <li className='font-Ovo'>
                        <a
                            href='#top'
                            onClick={closeMenu}
                            className='block py-2 transition-colors hover:text-red-500 focus-visible:text-red-500'
                        >
                            Home
                        </a>
                    </li>

                    <li className='font-Ovo'>
                        <a
                            href='#about'
                            onClick={closeMenu}
                            className='block py-2 transition-colors hover:text-red-500 focus-visible:text-red-500'
                        >
                            About Me
                        </a>
                    </li>

                    <li className='font-Ovo'>
                        <a
                            href='#experience'
                            onClick={closeMenu}
                            className='block py-2 transition-colors hover:text-red-500 focus-visible:text-red-500'
                        >
                            Experience
                        </a>
                    </li>

                    <li className='font-Ovo'>
                        <a
                            href='#skills'
                            onClick={closeMenu}
                            className='block py-2 transition-colors hover:text-red-500 focus-visible:text-red-500'
                        >
                            Skills
                        </a>
                    </li>

                    <li className='font-Ovo'>
                        <a
                            href='#work'
                            onClick={closeMenu}
                            className='block py-2 transition-colors hover:text-red-500 focus-visible:text-red-500'
                        >
                            Projects
                        </a>
                    </li>

                    <li className='font-Ovo'>
                        <a
                            href='#contact'
                            onClick={closeMenu}
                            className='block py-2 transition-colors hover:text-red-500 focus-visible:text-red-500'
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar