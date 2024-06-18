import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'


let MotionLink = motion(Link);

const Logo = () => {

  return (
    <div
      className='flex flex-col items-center justify-center mt-2'>
      <MotionLink href="/"
        className='flex items-center justify-center rounded-full w-16 h-16  bg-dark text-white dark:border-2 dark:border-solid dark:border-light
    text-2xl font-bold'
        whileHover={{
          backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
          transition: { duration: 1, repeat: Infinity }
        }}
      >
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <path d="m391.59,457.11l-9.64-26.86-10.76-30.01-9.61-26.79-1.15-3.22-10.76-30.01-10.76-30.01-7.33-20.42-3.44-9.58-10.76-30.01-10.76-30.01-5.04-14.07-5.72-15.94-10.76-30.01h-133.56v120.03H61.51v-120.03H1.5v300.07h60.01v-120.03h90.03v120.03h60.01v-120.03h76.95l10.76,30.01,2.3,6.43,8.45,23.57,10.76,30.01,10.76,30.01h61.17l-1.13-3.15Zm-180.04-176.9v-90.02h23.13l6.87,19.16,3.89,10.85,10.76,30.01,10.76,30.01h-55.42Z" fill="#FFF" stroke="#FFF" stroke-miterlimit="10" stroke-width="3" />
        </svg>

      </MotionLink>
    </div>
  )
}

export default Logo