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
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1647.96 551.43">
          {/* <circle cx="775.17" cy="275.71" r="274.21" fill="#231f20" stroke="#231f20" stroke-miterlimit="10" stroke-width="3" /> */}
          <path d="m391.59,457.11l-9.64-26.86-10.76-30.01-9.61-26.79-1.15-3.22-10.76-30.01-10.76-30.01-7.33-20.42-3.44-9.58-10.76-30.01-10.76-30.01-5.04-14.07-5.72-15.94-10.76-30.01h-133.56v120.03H61.51v-120.03H1.5v300.07h60.01v-120.03h90.03v120.03h60.01v-120.03h76.95l10.76,30.01,2.3,6.43,8.45,23.57,10.76,30.01,10.76,30.01h61.17l-1.13-3.15Zm-180.04-176.9v-90.02h23.13l6.87,19.16,3.89,10.85,10.76,30.01,10.76,30.01h-55.42Z" fill="#231f20" stroke="#231f20" stroke-miterlimit="10" stroke-width="3" />
          {/* <path d="m1644.6,472.82l-10.47-29.17-11.69-32.6-10.43-29.1-1.25-3.49-11.69-32.59-11.69-32.59-7.96-22.18-3.74-10.41-11.68-32.59-11.69-32.59-5.48-15.28-6.21-17.31-11.68-32.59h-97.21c-26.43,0-47.86,21.43-47.86,47.86v82.51h-97.78v-130.37h-14.2c-28.16,0-50.98,22.82-50.98,50.98v274.95s65.18,0,65.18,0v-130.37h97.78v130.37h65.18v-130.37h83.58l11.69,32.59,2.5,6.99,9.18,25.6,11.69,32.6,11.69,32.59h66.43s-1.23-3.42-1.23-3.42Zm-195.55-192.14v-86.09c0-6.45,5.23-11.68,11.68-11.68h13.45s7.46,20.81,7.46,20.81l4.23,11.78,11.69,32.59,11.68,32.59h-60.2Z" fill="#231f20" stroke="#231f20" stroke-miterlimit="10" stroke-width="3" />
          <path d="m972.61,401.53l-8.77-24.45-9.8-27.32-8.74-24.38-1.05-2.93-9.8-27.31-9.8-27.31-6.67-18.59-3.13-8.72-9.79-27.31-9.8-27.31-4.59-12.8-5.21-14.51-9.79-27.31h-121.56v109.24h-81.94v-109.24h-54.62v273.12h54.62v-109.25h81.94v109.25h54.62v-109.25h70.04l9.8,27.31,2.1,5.86,7.69,21.45,9.8,27.32,9.8,27.31h55.67l-1.03-2.87Zm-163.87-161.01v-81.93h21.06l6.25,17.44,3.54,9.87,9.8,27.31,9.79,27.31h-50.44Z" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="3" /> */}
        </svg>
      </MotionLink>
    </div>
  )
}

export default Logo