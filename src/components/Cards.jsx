/* eslint-disable no-unused-vars */
import React from "react";
import Search from "./Search";
import { motion } from "framer-motion";

function Cards() {
  return (
    <motion.dev 
    variants={{
      hidden:{opacity: 0, y:75},
      visible:{opacity:1, y:0},
    }}
    initial="hidden"
    animate="visible"
    transition={{duration:0.5, delay:0.25}}
    >
      <div className="flex items-center mt-36">
        <div className="h-[43vh] w-full bg-orange-100 rounded-2xl">
          <div className="text-center mt-16">
            <h1 className="text-2xl text-center">Hosh at hyperspeed</h1>
            <p className="text-center text-gray-400 pt-3">
              Our shortcuts transforms the way you host meeting with your
              keyboard
              <br /> Share screen, react, change scenes - all with the speed of
              a top
            </p>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="h-16 w-24 rounded-xl mt-14 shadow-2xl shadow-orange-200 bg-orange-50">
              <p className="text-center pt-5 text-2xl">⌘S</p>
              <p className="font-sans text-1xl sm:text-1xl md:text-1xl lg:text-1xl mt-6 text-gray-400">
                Switch to screenshare
              </p>
            </div>
            <div className="h-16 w-24 rounded-xl mt-14 shadow-2xl shadow-orange-200 bg-orange-50">
              <p className="text-center pt-5 text-2xl">⌘C</p>

              <p className="font-sans text-1xl sm:text-1xl md:text-1xl lg:text-1xl mt-6 text-gray-400">
                Emoji clap reaction
              </p>
            </div>
            <div className="h-16 w-24 rounded-xl mt-14 shadow-2xl shadow-orange-200 bg-orange-50">
              <p className="text-center pt-5 text-2xl">⌘M</p>
              <p className="font-sans text-1xl sm:text-1xl md:text-1xl lg:text-1xl mt-6 text-gray-400">
                Switch to main scene
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48">
        <h1 className="lg:text-5xl font-sans md:text-2xl sm:text-1xl">
          Find the prefect presentation template
        </h1>

        <p className="text-gray-400 mt-4">
          Leave a lasting impression in your next meeting by adding a easily
          customizeable
          <br /> overlays that mathch your brand,
        </p>
 


        
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-32 space-x-11">
      <div
      className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
      <div className="min-h-[256px]">
        <img src="https://cdn.dribbble.com/users/1213780/screenshots/7366508/media/d72e9a6b6a8f8a8d9fb3027785a720ca.png?resize=400x0" className="w-full" />
      </div>

      <div className="p-6 text-left">
        <h3 className="text-gray-800 text-xl font-bold">Heading</h3>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
        </p>
        <button type="button"
          className="rounded-full mt-6 px-5 py-2.5 text-sm tracking-wider border border-orange-500 hover:bg-orange-500 active:bg-orange-500">View</button>
      </div>
    </div>
    <div
      className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
      <div className="min-h-[256px]">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBW9x3XLCTF6KtC9viqSifSuKlylyg1Q69zOCrYfKAIUviDOeAFiWcCP4GIk6UnDO04U&usqp=CAU" className="w-full" />
      </div>

      <div className="p-6 text-left">
        <h3 className="text-gray-800 text-xl font-bold">Heading</h3>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
        </p>
        <button type="button"
          className="rounded-full mt-6 px-5 py-2.5 text-sm tracking-wider border border-orange-500 hover:bg-orange-500 active:bg-orange-500">View</button>
      </div>
    </div>
    <div
      className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
      <div className="min-h-[256px]">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAgP9J7k4cFvLtLO9gFJBYacwDxD2OEZURNJ_WklxiVYc78MSXChgixigeUSNgKbB25E&usqp=CAU" className="w-full" />
      </div>

      <div className="p-6 text-left">
        <h3 className="text-gray-800 text-xl font-bold">Heading</h3>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
        
        </p>
        <button type="button"
          className="rounded-full mt-6 px-5 py-2.5 text-sm tracking-wider border border-orange-500 hover:bg-orange-500 active:bg-orange-500">View</button>
      </div>
    </div>

      </div>
      <Search/>
    </motion.dev>
  );
}

export default Cards;
