"use client"

import Link from 'next/link'
import React, { useState } from 'react'

import { IoIosHome } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";


export default function header() {

  return (
    <div className='mt-3'>
      <div className='flex w-[88%] m-auto justify-between'>
        <div className='flex items-center gap-2'>
          <Link href="/" className='hidden md:block'>HOME</Link>
            <Link href="/"><IoIosHome className='block md:hidden text-2xl'/></Link>
          <Link href="/about" className='hidden md:block'>ABOUT</Link>
            <Link href="/about"><FaInfoCircle className='block md:hidden text-xl'/></Link>
        </div>

        <div>
          <Link href="/">
            <h1 className='text-xl flex items-center gap-1'>
              <span className='bg-yellow-400 px-4 py-1 rounded-lg font-semibold'>POMY</span>
              <span className='hidden md:block'>movies</span>
            </h1>
          </Link>
        </div>
      </div>

    </div>
  )
}
