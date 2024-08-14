/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { motion } from 'framer-motion'

function CardLayout({image, titles, dis}) {
  return (
    <motion.div
    animate={{ baseFrequency: 0.5 }}
    transition={{ type: "spring", mass: 0.5 }}>

       <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mt-32 space-x-11">
          <img
            className="w-full md:w-1/2 h-[30vh] rounded-xl mt-5 md:mt-0"
            src={image}
            alt="Description"
          />
     
          <div className="text-left md:w-1/2 w-full">
            <h1 className="font-sans text-2xl sm:text-5xl md:text-6xl lg:text-5xl pt-16">
              {titles}
            </h1>
            <p className="font-sans text-1xl sm:text-1xl md:text-1xl lg:text-1xl mt-6 text-gray-400">
              {dis}
            </p>
          </div>
      </div>
    </div>

  </motion.div>
  )
}

export default CardLayout