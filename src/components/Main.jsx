import PropTypes from 'prop-types';
import { motion } from "framer-motion"

function Main({ imageUrl, title, description }) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}>

    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mt-32 space-x-11">
      
          <div className="text-left md:w-1/2 w-full">
            <h1 className="font-sans text-2xl sm:text-5xl md:text-6xl lg:text-5xl pt-16">
              {title}
            </h1>
            <p className="font-sans text-1xl sm:text-1xl md:text-1xl lg:text-1xl mt-6 text-gray-400">
              {description}
            </p>
          </div>
          <img
            className="w-full md:w-1/2 h-[30vh] rounded-xl mt-5 md:mt-0"
            src={imageUrl}
            alt="Description"
          />
        </div>
      </div>
      </motion.div>
  );
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Main;
