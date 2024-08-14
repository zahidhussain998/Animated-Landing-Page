import React, { useState } from "react";
import Fotter from "./Fotter";
import { motion } from "framer-motion"


function Search() {
  const [search, setSearch] = useState("Subscribe");

  const Searchandle = (e) => {
    e.preventdefault()
    

    
  }
  return (
    <div className="mt-36">
      <div>
        <h1 className="text-2xl sm:text-5xl text-center">
          Ready to Create memorable
          <br /> videos meetings
        </h1>
        <p className="text-center text-gray-400 pt-7">
          Our shortcuts transforms the way you host meeting with your keyboard{" "}
          <br /> Share screen, react, change scenes - all with the speed of a
          top
        </p>

        <div className="mt-32">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="text"
            id="xyz@gmail.com"
            name="xyz@gmail.com"
            className="border border-orange-500 rounded-full px-10 py-3 text-gray-300"
          />
          <button className="bg-orange-500 rounded-full border py-3 ml-2 px-10">
            Subscribe
          </button>
        </div>
      </div>
      <motion.button whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>

      <div className="w-full h-auto bg-orange-100 flex flex-col md:flex-row justify-between items-center rounded-3xl mt-36 p-6">
    <div className="md:max-w-lg">
      <p className="font-sans text-2xl">
        Our shortcuts transform the way <br/> you host meetings with your keyboard
      </p>
      <p className="font-thin mt-10 text-1xl ">
        Share screen, react, change scenes - all with the speed of a top
      </p>

      <div className="mt-10 font-extralight text-3xl">
        <h1>
          Learn More 
        </h1>
      </div>
    </div>
    <div className="flex justify-center md:ml-6">
      <img className="rounded-xl max-w-full h-auto" src="https://cdn.dribbble.com/users/1821976/screenshots/14975693/media/8ac66653d5b756e84ba33c4852246fd9.jpg?resize=400x300&vertical=center" alt="Meeting shortcuts illustration" />
    </div>
</div>
      </motion.button>

      <Fotter/>
    </div>
  );
}

export default Search;
