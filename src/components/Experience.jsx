import React from 'react'
import {EXPERIENCES} from "../constants"
import {motion} from "framer-motion"

export default function Experience() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
        initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
        className='my-20 text-center text-4xl'>
            
            Experience
        </motion.h1>
        {EXPERIENCES.map((experience,index)=>(
            // eslint-disable-next-line react/jsx-key
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                </motion.div>
                <motion.div 
                initial={{opacity:0, x:100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1}}
                className="w-full max-w-xl lg:w-3/4">
                <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-purple-100'>{experience.company}</span></h6>
                <p className='mb-4 text-neutral-400'>{experience.description}</p>
                <div className='flex flex-wrap'>
              {experience.technologies.map((tech, index) => (
                <div key={index} className='mr-2 mb-2 rounded px-2 py-1 bg-neutral-900 text-purple-800 text-sm font-medium'>
                  {tech}
                </div>
              ))}
            </div>
                </motion.div>
            </div>
        ))
            
        }
    </div>
  )
}

