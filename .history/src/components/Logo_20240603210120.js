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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 428.53 328.93"><g id="Слой_2" data-name="Слой 2"><g id="Layer_1" data-name="Layer 1"><path d="M425.19,324l-10.47-29.17L403,262.22l-10.43-29.1-1.25-3.49L379.66,197,368,164.45l-8-22.18-3.74-10.41L344.59,99.27,332.9,66.68,327.42,51.4l-6.21-17.31L309.53,1.5H212.32a47.86,47.86,0,0,0-47.86,47.86v82.51H66.68V1.5H52.48a51,51,0,0,0-51,51v275H66.68V197.06h97.78V327.43h65.18V197.06h83.58l11.69,32.59,2.5,7,9.18,25.6,11.69,32.6L360,327.43H426.4L425.17,324ZM229.64,131.85V45.76a11.68,11.68,0,0,1,11.68-11.68h13.45l7.46,20.81,4.23,11.78,11.69,32.59,11.68,32.59H229.64Z" fill="#FFF" stroke="#FFF" stroke-miterlimit="10" stroke-width="3" /></g></g></svg>
      </MotionLink>
    </div>
  )
}

export default Logo